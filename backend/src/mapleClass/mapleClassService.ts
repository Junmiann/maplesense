import pool from "../db.js";
import { buildMapleClassQuery } from "./mapleClassQueryBuilder.js";
import type { ClassQueryParams } from "../types/class.js";

export async function queryClasses(params: ClassQueryParams) {
    const client = await pool.connect();
    
    try {
        const { query, values } = buildMapleClassQuery(params);

        const charactersResults = await client.query(
            query, 
            values
        );

        return charactersResults.rows;
    } finally {
        client.release();
    }
}

export async function getCharacterId(charId: number) {
    const client = await pool.connect();

    try {
        const getCharacterIdResult = await client.query(
            "SELECT * FROM classes WHERE id = $1", 
            [charId]
        );

        return getCharacterIdResult.rows;
    } finally {
        client.release();
    }
}