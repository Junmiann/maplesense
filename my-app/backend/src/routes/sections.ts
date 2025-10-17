import { Router } from "express";
import { createSection } from "../controllers/sectionController.js";

const router = Router();

router.post("/", createSection);

export default router;