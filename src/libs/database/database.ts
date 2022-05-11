import { DB_NAME } from "~/utils/constants";
import { createRxDatabase, RxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/dexie";

import { DbCollections } from "./database.type";
import { physician } from "./schemas";

let dbPromise: Promise<RxDatabase<DbCollections>> | null = null;

const create = async () => {
  const db = await createRxDatabase<DbCollections>({
    name: DB_NAME,
    storage: getRxStorageDexie(),
  });

  await db.addCollections({ physician: { schema: physician } });

  return db;
};

const get = () => {
  if (!dbPromise) dbPromise = create();
  return dbPromise;
};

const Database = { get };

export { Database };
