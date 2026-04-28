import pool from "./db.js";
import { buildClassQuery } from "./queryBuilder.js";

export async function queryClasses(params: {
    job?: string;
    origin?: string;
    sort?: "difficulty";
    order?: "asc" | "desc";
}) {
    const client = await pool.connect();
    
    try {
        const { query, values } = buildClassQuery(params);
        const charactersResults = await client.query(query, values);
        return charactersResults.rows;
    } finally {
        client.release();
    }
}

export async function getCharacterId(charId: number) {
    const client = await pool.connect();

    try {
        const getCharacterIdResult = await client.query("SELECT * FROM classes WHERE id = $1", 
            [charId]);

        return getCharacterIdResult.rows;
    } finally {
        client.release();
    }
}