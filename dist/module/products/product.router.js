"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("./product.controllers");
const router = express_1.default.Router();
// create/insert product
router.post("/", product_controllers_1.ProductControllers.createProduct);
// get/fetched all product
router.get("/", product_controllers_1.ProductControllers.getAllProduct);
// find product by id
router.get("/:productId", product_controllers_1.ProductControllers.findProductById);
// deleted product by id
router.delete("/:productId", product_controllers_1.ProductControllers.deleteProductById);
// put product by id
router.put("/:productId", product_controllers_1.ProductControllers.putProductById);
exports.ProductRouter = router;
