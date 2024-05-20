import express from "express";
import { ProductControllers } from "./product.controllers";
const router = express.Router();

router.post("/", ProductControllers.createProduct);

export const ProductRouter = router;
