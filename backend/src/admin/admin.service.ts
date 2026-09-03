import bcrypt from "bcrypt";

import pool from "../db.js";
import type { Admin } from "../types/admin.js";

export async function authenticateAdmin (username: string, password: string) {
    try {
        const admin = await getAdminByUsername(username);

        if (!admin) {
            return false;
        }

        const passwordIsValid = await checkPassword(admin, password);

        return passwordIsValid;
    
    } catch {
        throw new Error("Login failed");
    };
};

export async function checkPassword(admin: Admin, password: string) {
    const passwordIsValid = await bcrypt.compare(
        password,
        admin.password_hash
    );

    return passwordIsValid;
};

export async function getAdminByUsername(username:string) {
    try {
        const adminExists = await pool.query(
            `SELECT *
            FROM admins 
            WHERE username=$1`,
            [username]
        );

        if (adminExists.rows.length > 0) {
            const admin = adminExists.rows[0]
            return admin;
        }

        return false;

    } catch {
        throw new Error("Can't find an admin with this username.");
    };
};