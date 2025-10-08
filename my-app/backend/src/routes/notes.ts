import { Router } from "express";
import type { Request, Response } from "express";
import type { Note } from "../types/note.js";

const router = Router();

const notes: Note[] = [
  { id: 1, sectionId: 102, title: "Greeting", writtenBy: 1, note: "Hello /Anna" },
  { id: 2, sectionId: 111, title: "First note", writtenBy: 2, note: "This is my first note." },
];

router.get("/", (req: Request, res: Response) => {
    res.json(notes);
});

export default router;