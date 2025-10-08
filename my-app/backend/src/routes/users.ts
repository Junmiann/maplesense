import { Router } from "express";
import type { Request, Response } from "express";
import type { User } from "../types/user.js";

const router = Router();

const users: User[] = [
  { id: 1, firstName: "Anna", lastName: "Johnson", groupId: 3 },
  { id: 2, firstName: "Bob", lastName: "McKnight", groupId: 19 },
];

router.get("/", (req: Request, res: Response) => {
    res.json(users);
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