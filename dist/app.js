"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_router_1 = require("./module/products/product.router");
const order_router_1 = require("./module/orders/order.router");
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
// middleware/parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// product router
app.use("/api/products", product_router_1.ProductRouter);
//order router
app.use("/api/orders", order_router_1.OrderRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// wrong all api error
app.all("*", (req, res) => {
    const url = `${req.protocol}://${req.hostname}:${config_1.default.port}${req.path}`;
    res.status(400).json({
        success: false,
        message: "Route not found",
        path: url,
    });
});
exports.default = app;
