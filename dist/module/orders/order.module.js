"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const order_pre_SchemaAndMethods_1 = require("./order.pre.SchemaAndMethods");
const Order = (0, mongoose_1.model)("Orders", order_pre_SchemaAndMethods_1.orderSchema);
exports.Order = Order;
