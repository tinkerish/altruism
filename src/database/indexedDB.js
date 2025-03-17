import { openDB } from "idb";

const dbPromise = openDB("event-form-db", 1, {
  upgrade(db) {
    db.createObjectStore("eventData");
  },
});

export const indexedDBStorage = {
  getItem: async (name) => {
    const db = await dbPromise;
    const value = await db.get("eventData", name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name, value) => {
    const db = await dbPromise;
    console.log(name,value)
    await db.put("eventData", JSON.stringify(value), name);
  },
  removeItem: async (name) => {
    const db = await dbPromise;
    await db.delete("eventData", name);
  },
};
