import bcrypt from "bcrypt";

import pool from "../../db.js";
import type { Admin } from "../../types/admin.js";

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

export async function checkPassword(admin: Admin, password: string) {
    const passwordIsValid = await bcrypt.compare(
        password,
        admin.password_hash
    );

    return passwordIsValid;
};

export async function updateAdminPassword(adminId: string, newPassword: string) {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await pool.query(
        `UPDATE admins 
        SET password_hash = $1 
            AND must_change_password = false
            AND updated_at = NOW()
        WHERE id = $2`,
        [hashedPassword, adminId]
    );
};

export async function checkIfAdminMustChangePassword(adminId: string) {
    const admin = await pool.query(
        `SELECT must_change_password 
        FROM admins 
        WHERE id=$1`,
        [adminId]
    );

    return admin.rows[0].must_change_password;
};
