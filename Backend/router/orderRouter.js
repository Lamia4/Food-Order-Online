import express from "express";
import orderController from "../controllers/orderController.js";

const router = express.Router();

router.post("/checkout", orderController.createNewOrder );

export default router;