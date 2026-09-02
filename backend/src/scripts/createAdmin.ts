import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import crypto from "crypto";
import bcrypt from "bcrypt";

import pool from "../db.js";

createAdmin()
    .catch((error) => {
        console.error("Failed to create admin: ", error.message);
        process.exit(1);
    })
    .finally(() => pool.end());

async function createAdmin() {
    const username = await createAdminUsername();
    const { password, passwordHash } = await generateAdminPassword();

    try {
        await pool.query(
            `INSERT INTO admins (username, password_hash) 
            VALUES ($1, $2)`,
            [username, passwordHash],
        );

    } catch (error: any) {
        if (error.code === "23505") {
            throw new Error("Username already exists.");
        }

        throw error;

    }

    console.log("Admin user created successfully.");
    console.log(`Username: ${username}`);
    console.log(`Temporary password: ${password}`);
};

async function createAdminUsername() {
    const rl = readline.createInterface({ input, output });

    try {
        const username = (await rl.question("Enter admin username: ")).trim();

        if (!username) {
            throw new Error("Username cannot be empty.");
        }

        return username;
        
    } finally {
        rl.close();
    }
};

async function generateAdminPassword() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

    const generatedPassword = Array.from(
        { length: 10 },() => chars[crypto.randomInt(chars.length)]
    ).join("");

    const generatedPasswordHash = await bcrypt.hash(generatedPassword, 10);
    
    return {
        password: generatedPassword,
        passwordHash: generatedPasswordHash,
    };
};