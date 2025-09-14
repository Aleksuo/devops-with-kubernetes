import { Pool } from "pg";

export const pool = new Pool(
    {
        connectionString: process.env.DATABASE_URL,
        max: Number(process.env.PGPOOL_MAX ?? 10),
        connectionTimeoutMillis: 10000
    }
)