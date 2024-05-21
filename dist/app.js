"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./module/products/product.router");
const app = (0, express_1.default)();
// middleware/parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// product router
app.use("/api/products", product_router_1.ProductRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
