import { persistenceService, subscribe, publish } from '@eclipse-docks/core';
import { v4 } from '@eclipse-docks/core/externals/third-party';
import type { DataView } from './api';
import { TOPIC_DATAVIEW_PUBLISH, TOPIC_DATAVIEW_ADDED } from './api';

const KEY_PREFIX = 'dataview/';
const KEY_INDEX = KEY_PREFIX + 'index';

export interface DataviewListEntry {
  storageKey: string;
  title: string;
  source?: string;
  createdAt: number;
}

type IndexEntry = DataviewListEntry;

export class DataviewerService {
  private subscriptionToken?: string;

  init(): void {
    if (this.subscriptionToken !== undefined) return;
    this.subscriptionToken = subscribe(TOPIC_DATAVIEW_PUBLISH, (payload: DataView) => {
      void this.handlePublish(payload);
    });
  }

  private async handlePublish(payload: DataView): Promise<void> {
    const storageKey = v4();
    const createdAt = Date.now();
    const entry: DataView = {
      id: payload.id ?? storageKey,
      title: payload.title,
      data: payload.data,
      source: payload.source,
      createdAt,
    };
    await persistenceService.persistObject(KEY_PREFIX + storageKey, entry);
    const index = (await persistenceService.getObject(KEY_INDEX)) as IndexEntry[] | undefined;
    const list = Array.isArray(index) ? index : [];
    list.push({ storageKey, title: payload.title, source: payload.source, createdAt });
    await persistenceService.persistObject(KEY_INDEX, list);
    publish(TOPIC_DATAVIEW_ADDED, { storageKey, title: payload.title, createdAt });
  }

  async listViews(): Promise<DataviewListEntry[]> {
    const raw = await persistenceService.getObject(KEY_INDEX);
    if (!Array.isArray(raw) || raw.length === 0) return [];
    if (typeof raw[0] === 'string') {
      return (raw as string[]).map((storageKey) => ({
        storageKey,
        title: storageKey,
        createdAt: 0,
      }));
    }
    const list = raw as IndexEntry[];
    return [...list].sort((a, b) => a.createdAt - b.createdAt);
  }

  async getView(storageKey: string): Promise<DataView | null> {
    const entry = await persistenceService.getObject(KEY_PREFIX + storageKey);
    return entry ?? null;
  }

  async deleteView(storageKey: string): Promise<void> {
    const index = (await persistenceService.getObject(KEY_INDEX)) as IndexEntry[] | undefined;
    const list = Array.isArray(index) ? index.filter((e) => e.storageKey !== storageKey) : [];
    await persistenceService.persistObject(KEY_INDEX, list);
    await persistenceService.persistObject(KEY_PREFIX + storageKey, null);
  }

  async clearAllViews(): Promise<void> {
    const index = (await persistenceService.getObject(KEY_INDEX)) as IndexEntry[] | undefined;
    const list = Array.isArray(index) ? index : [];
    await Promise.all(list.map((entry) => persistenceService.persistObject(KEY_PREFIX + entry.storageKey, null)));
    await persistenceService.persistObject(KEY_INDEX, []);
  }
}

export const dataviewerService = new DataviewerService();
