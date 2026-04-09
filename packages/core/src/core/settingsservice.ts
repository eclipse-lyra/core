import {publish} from "./events";
import {persistenceService} from "./persistenceservice";
import {rootContext} from "./di";

export const SETTINGS_FILE_PATH = ".eclipse-docks/settings.json"

export const DIALOG_SETTINGS_KEY = "dialogSettings"

export interface AppSettings {
    [key: string]: any;
}

export const TOPIC_SETTINGS_CHANGED = "events/settings/changed"

/**
 * Minimal JSON Schema subset for settings UI. Compatible with JSON Schema (e.g. from Zod via zod-to-json-schema).
 * Top-level properties = categories; nested properties = settings in that category.
 */
export interface SettingsJsonSchema {
    type?: 'object' | 'string' | 'number' | 'boolean' | 'array';
    title?: string;
    description?: string;
    default?: unknown;
    enum?: readonly unknown[] | unknown[];
    properties?: Record<string, SettingsJsonSchema>;
    /** Extension: category sort order (only meaningful on top-level property schemas). */
    order?: number;
}

export interface SettingsCategoryInfo {
    id: string;
    label: string;
    order: number;
    schema: SettingsJsonSchema;
}

function mergeSchemaProperties(
    target: Record<string, SettingsJsonSchema>,
    source: Record<string, SettingsJsonSchema> | undefined
): void {
    if (!source) return;
    for (const [key, value] of Object.entries(source)) {
        if (value && typeof value === 'object') {
            const existing = target[key];
            if (existing?.properties && value.properties) {
                mergeSchemaProperties(existing.properties, value.properties);
            } else {
                target[key] = { ...value, properties: value.properties ? { ...value.properties } : undefined };
            }
        }
    }
}

class SettingsService {

    private appSettings?: AppSettings;

    private mergedSchema: SettingsJsonSchema = { type: 'object', properties: {} };

    private async checkSettings() {
        if (!this.appSettings) {
            this.appSettings = await persistenceService.getObject(SETTINGS_FILE_PATH)
            if (!this.appSettings) {
                this.appSettings = {}
                await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
            }
            publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
        }
    }

    /**
     * Register a JSON Schema for settings. Top-level keys of `schema.properties` become categories.
     * Consumers can pass schemas produced by Zod (e.g. zod-to-json-schema) or hand-written JSON Schema.
     */
    public registerSchema(schema: SettingsJsonSchema): void {
        const props = schema.properties ?? (schema.type === 'object' ? {} : undefined);
        if (props) {
            if (!this.mergedSchema.properties) this.mergedSchema.properties = {};
            mergeSchemaProperties(this.mergedSchema.properties, props);
        }
    }

    public getCategories(): SettingsCategoryInfo[] {
        const props = this.mergedSchema.properties;
        if (!props) return [];
        return Object.entries(props)
            .filter(([, s]) => s && typeof s === 'object')
            .map(([id, schema]) => ({
                id,
                label: (schema.title as string) ?? id,
                order: typeof schema.order === 'number' ? schema.order : 0,
                schema,
            }))
            .sort((a, b) => a.order - b.order);
    }

    public getSchemaForCategory(categoryId: string): SettingsJsonSchema | undefined {
        return this.mergedSchema.properties?.[categoryId];
    }

    /**
     * Resolve a dotted key (e.g. "editor.fontSize") to the JSON Schema fragment for that path.
     */
    public getSchemaForSettingKey(dottedKey: string): SettingsJsonSchema | undefined {
        const parts = dottedKey.split('.').filter(Boolean);
        if (parts.length === 0) return this.mergedSchema;
        let current: SettingsJsonSchema | undefined = this.mergedSchema;
        for (const part of parts) {
            current = current?.properties?.[part];
            if (!current) return undefined;
        }
        return current;
    }

    private traversePath(obj: Record<string, any>, pathParts: string[], createIfMissing: boolean): { parent: Record<string, any>; key: string } | null {
        if (pathParts.length === 0) return null;
        let current: Record<string, any> = obj;
        const lastIndex = pathParts.length - 1;
        for (let i = 0; i < lastIndex; i++) {
            const part = pathParts[i];
            if (current[part] === undefined) {
                if (!createIfMissing) return null;
                current[part] = {};
            }
            if (current[part] === null || typeof current[part] !== 'object') return null;
            current = current[part];
        }
        return { parent: current, key: pathParts[lastIndex] };
    }

    public async getAt(path: string): Promise<unknown> {
        await this.checkSettings();
        const parts = path.split('.').filter(Boolean);
        if (parts.length === 0) return this.appSettings;
        const result = this.traversePath(this.appSettings!, parts, false);
        if (!result) return undefined;
        return result.parent[result.key];
    }

    public async setAt(path: string, value: unknown): Promise<void> {
        await this.checkSettings();
        const parts = path.split('.').filter(Boolean);
        if (parts.length === 0) return;
        const result = this.traversePath(this.appSettings!, parts, true);
        if (!result) return;
        result.parent[result.key] = value;
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }

    public async get(key: string) {
        await this.checkSettings()
        return this.appSettings![key]
    }

    public async set(key: string, value: any) {
        await this.checkSettings()
        this.appSettings![key] = value
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }

    public async getAll() {
        await this.checkSettings()
        return this.appSettings!;
    }

    public async setAll(settings: AppSettings) {
        this.appSettings = settings
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }

    public async getDialogSetting(key: string) {
        await this.checkSettings()
        const dialogSettings = this.appSettings![DIALOG_SETTINGS_KEY] || {}
        return dialogSettings[key]
    }

    public async setDialogSetting(key: string, value: any) {
        await this.checkSettings()
        const dialogSettings = this.appSettings![DIALOG_SETTINGS_KEY] || {}
        dialogSettings[key] = value
        this.appSettings![DIALOG_SETTINGS_KEY] = dialogSettings
        await persistenceService.persistObject(SETTINGS_FILE_PATH, this.appSettings)
        publish(TOPIC_SETTINGS_CHANGED, this.appSettings)
    }
}

export const appSettings = new SettingsService();
rootContext.put("appSettings", appSettings)
