import bcrypt from "bcrypt";
import pool from "../../src/db.js";

export async function createTestAdmin() {
    const username = `test-admin-${Date.now()}`;
    const password = "test-password";

    const passwordHash = await bcrypt.hash(password, 10);

    await pool.query(
        `
        INSERT INTO admins (username, password_hash)
        VALUES ($1, $2)
        `,
        [username, passwordHash]
    );

    return {
        username,
        password
    };
}