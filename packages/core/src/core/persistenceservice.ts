import {rootContext} from "./di";

const DB_NAME = 'eclipse-docks-persistence';
const STORE_NAME = 'keyval';
const DB_VERSION = 1;

let dbPromise: Promise<IDBDatabase> | null = null;

function getDB(): Promise<IDBDatabase> {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (e) => {
        (e.target as IDBOpenDBRequest).result.createObjectStore(STORE_NAME);
      };
    });
  }
  return dbPromise;
}

export class PersistenceService {
  /**
   * Persists a value under the given key. When value is null or undefined,
   * the entry for that key is removed (delete semantics).
   */
  async persistObject(key: string, value: unknown): Promise<void> {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req =
        value === null || value === undefined
          ? store.delete(key)
          : store.put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  async getObject(key: string): Promise<any> {
    const db = await getDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
}

export const persistenceService = new PersistenceService();
rootContext.put("persistenceService", persistenceService);
