import { Router } from "express";
import type { Request, Response } from "express";
import type { User } from "../types/user.js";
import pool from "../db.js";

const router = Router();

const users: User[] = [
  { id: 1, firstName: "Anna", lastName: "Johnson", groupId: 3 },
  { id: 2, firstName: "Bob", lastName: "McKnight", groupId: 19 },
];

/* TEST: will probably be changed onwards */
router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Could not fetch users" });
  }
});

router.post("/", (req: Request, res: Response) => {
  const lastUser = users.at(-1);
  const newId = lastUser ? lastUser.id + 1 : 1;

  const { firstName, lastName, groupId } = req.body;

  const newUser = { id: newId, firstName, lastName, groupId };
  users.push(newUser);
  res.json(newUser);
});

export default router;