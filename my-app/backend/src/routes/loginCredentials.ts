import { Router } from "express";
import type { Request, Response } from "express";
import type { LoginCredential } from "../types/loginCredential.js";

const router = Router();

const credentials: LoginCredential[] = [
    {id: 1, userId: 1, email: "AnnaJohnson@gmail.com", password: "Hi123"},
    {id: 2, userId: 2, email: "Bob@gmail.com", password: "Bob"}
];

router.post("/", (req: Request, res: Response) => {
    const {userId, email, password} = req.body;
    const newId = credentials.at(-1)?.id! + 1;

    const newCredential = {id: newId, userId, email, password};
    credentials.push(newCredential);
    res.json(newCredential);
});

export default router;