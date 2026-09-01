import type { Request, Response } from "express";
import { authenticateAdmin } from '../admin/admin.service.js';

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const isAuthorized = await authenticateAdmin(username, password);

    if (!isAuthorized) {
        return res.status(401).json({ 
            message: "Invalid credentials"
        });
    };

    return res.status(200).json({
        message: "Login successful"
    });
};