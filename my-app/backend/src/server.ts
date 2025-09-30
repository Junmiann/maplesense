import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = 5000;

// Not the real data, only used for testing
const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Charlie" },
];

const notes = [
  { id: 1, userId: 1, text: "Hello /Anna" },
  { id: 2, userId: 2, text: "This is my first note." },
];

app.use(express.json());

// Routes
app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/notes", (req: Request, res: Response) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`The server is on: http://localhost:${PORT}`);
});
