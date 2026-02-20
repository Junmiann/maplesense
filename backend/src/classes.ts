import { Router } from "express";
import * as classController from "./classController.js";

const router = Router();

router.get("/", classController.fetchClasses);
router.get("/character/:id", classController.fetchCharacter);

export default router;