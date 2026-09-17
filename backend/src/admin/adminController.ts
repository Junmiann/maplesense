import type { Request, Response } from "express";
import { authenticateAdmin, checkIfAdminMustChangePassword, updateAdminPassword } from './auth/authService.js';
import { generateToken, verifyToken } from './auth/authToken.js';

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const admin = await authenticateAdmin(username, password);

    if (!admin) {
        return res.status(401).json({ 
            message: "Invalid credentials",
            success: false
        });
    };

    const token = generateToken(admin.id);

    return res.status(200).json({
        message: "Login successful",
        success: true,
        token
    });
};

export async function changePassword(req: Request, res: Response) {
    try {
        const token = getToken(req);
        const { adminId } = verifyToken(token);

        const { newPassword } = req.body;

        await updateAdminPassword(adminId, newPassword);

        return res.status(200).json({
            message: "Password changed successfully",
            success: true
        });

    } catch (error) {
        return res.status(401).json({ 
            message: "Password change failed.",
            success: false
        });
    }
};

export async function getPasswordChangeStatus(req: Request, res: Response) {
    try {
        const token = getToken(req);
        const { adminId } = verifyToken(token);

        const mustChangePassword = await checkIfAdminMustChangePassword(adminId);

        return res.status(200).json({
            mustChangePassword,
            success: true
        });
    } catch (error) {
        return res.status(401).json({ 
            message: "Invalid token",
            success: false
        });
    }
};

export function getToken(req: Request ) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("No token provided");
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        throw new Error("No token provided");
    } 

    return token;
};