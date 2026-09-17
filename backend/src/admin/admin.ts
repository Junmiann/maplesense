import { Router } from "express";
import * as adminController from "./adminController.js";

const router = Router();

router.post("/login", adminController.login);
router.post("/change-password", adminController.changePassword);

router.get("/password-change-status", adminController.getPasswordChangeStatus);

export default router;