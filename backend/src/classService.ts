import pool from "./db.js";
import { buildClassQuery } from "./classQueryBuilder.js";

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

export async function selectedCharacter(charId: number) {
    const client = await pool.connect();

    try {
        const selectedCharacterResult = await client.query("SELECT * FROM classes WHERE id = $1", 
            [charId]);

        return selectedCharacterResult.rows;
    } finally {
        client.release();
    }
}