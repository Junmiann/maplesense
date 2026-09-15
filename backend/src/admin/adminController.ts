import type { Request, Response } from "express";
import { authenticateAdmin } from './auth/authService.js';
import { generateToken } from './auth/authToken.js';

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const isAuthorized = await authenticateAdmin(username, password);

    if (!isAuthorized) {
        return res.status(401).json({ 
            message: "Invalid credentials",
            success: false
        });
    };

    const token = generateToken(username);

    return res.status(200).json({
        message: "Login successful",
        success: true,
        token
    });
};