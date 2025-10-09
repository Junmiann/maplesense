import { Router } from "express";
import type { Request, Response } from "express";
import type { LoginCredential } from "../types/loginCredential.js";

const router = Router();

const credentials: LoginCredential[] = [
    {id: 1, userId: 1, email: "AnnaJohnson@gmail.com", password: "Hi123"},
    {id: 2, userId: 2, email: "Bob@gmail.com", password: "Bob"}
];

router.post("/login", (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = credentials.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful!", user });
});

export default router;