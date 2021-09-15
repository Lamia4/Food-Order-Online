import express from "express";
import authenticationController from "../controllers/authenticateController.js";

const router = express.Router();

router.post("/login", authenticationController.loginByEmail);
router.get("/logout", authenticationController.logout);

export default router;