import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.get("/products", productController.getProducts);
router.post("/products", productController.createProduct);
router.delete("/products/:id", productController.deleteProduct);
router.put("/products/:id", productController.updateProduct);
router.get("/products/:categoryName", productController.getProductsCategory)

export default router