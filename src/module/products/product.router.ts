import express from "express";
import { ProductControllers } from "./product.controllers";
const router = express.Router();
// create/insert product
router.post("/", ProductControllers.createProduct);
// find product by id
router.get("/:productId", ProductControllers.findProductById);
// deleted product by id
router.delete("/:productId", ProductControllers.deleteProductById);
// put product by id
router.put("/:productId", ProductControllers.putProductById);

// serach product by any string
router.get("/", ProductControllers.getAllProductOrQueryAnyString);


// // get/fetched all product
// router.get("/", ProductControllers.serchProductByAnyString);


export const ProductRouter = router;
