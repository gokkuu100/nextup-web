import { neon } from "@neondatabase/serverless";

const globalForDb = globalThis as unknown as {
  sql?: ReturnType<typeof neon>;
};

export function getSql() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  if (!globalForDb.sql) {
    globalForDb.sql = neon(connectionString);
  }
  return globalForDb.sql;
}
