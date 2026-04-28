export function buildClassQuery(params: {
    job?: string;
    origin?: string;
    sort?: "difficulty";
    order?: "asc" | "desc";
}) {
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

    if (params.sort == "difficulty") {
        const allowedOrder = ["asc", "desc"];
        const order =
            params.order && allowedOrder.includes(params.order)
            ? params.order
            : "asc";

        query += ` ORDER BY difficulty ${order}`;
    }

    return { query, values };
}