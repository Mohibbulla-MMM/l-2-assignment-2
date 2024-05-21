import express from "express";
import { ProductControllers } from "./product.controllers";
const router = express.Router();
// create/insert product
router.post("/", ProductControllers.createProduct);
// get/fetched all product
router.get("/", ProductControllers.getAllProduct);
// find product by id
router.get("/:productId", ProductControllers.findProductById);

export const ProductRouter = router;
