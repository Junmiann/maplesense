import { Router } from "express";
import * as adminController from "./adminController.js";

const router = Router();

router.post("/login", adminController.login);

export default router;