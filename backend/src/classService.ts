import pool from "./db.js";

export async function queryClasses(params: {
    job?: string;
    origin?: string;
}) {
    const client = await pool.connect();
    
    try {
        let query = "SELECT * FROM classes";
        const conditions: string[] = [];
        const values: any[] = [];
        let i = 1;

        /* Filter based on Job */
        if (params.job) {
            conditions.push(`EXISTS (
                SELECT 1
                FROM unnest(classes.job) AS x
                WHERE LOWER(x) = LOWER($1))`);
            values.push(params.job);
            i++;
        }

        /* Filter based on Origin */
        if (params.origin) {
            conditions.push(`LOWER(origin) = LOWER($${i})`);
            values.push(params.origin);
            i++;
        }

        if (conditions.length) {
            query += " WHERE " + conditions.join(" AND ");
        }

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