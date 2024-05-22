"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderZodValidation = void 0;
// orderValidation.ts
const zod_1 = require("zod");
const orderZodValidation = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "email field is required, and value string type",
    })
        .email("Invalid email format")
        .max(100, "Value Maxlenth 100 characters"),
    productId: zod_1.z
        .string({
        required_error: "productId field is required, and value string type",
    })
        .max(100, "Value Maxlenth 100 characters"),
    price: zod_1.z
        .number({
        required_error: "price field is required, and value number type",
    })
        .nonnegative("Price must be a positive number")
        .max(9999999999, "Value Maxlenth 10 characters"),
    quantity: zod_1.z
        .number({
        required_error: "quantity field is required, and value number type",
    })
        .nonnegative("Quantity must be a positive number")
        .max(9999999999, "Value Maxlenth 10 characters"),
});
exports.orderZodValidation = orderZodValidation;
