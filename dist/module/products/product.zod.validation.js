"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductZodValidation = void 0;
const zod_1 = require("zod");
// Define the Zod schema for product variants
const productVariantsZodValidation = zod_1.z.object({
    type: zod_1.z
        .string()
        .max(100, "Type must be at most 100 characters")
        .trim()
        .nonempty("Product variants type field is required"),
    value: zod_1.z
        .string()
        .max(200, "Value must be at most 200 characters")
        .trim()
        .nonempty("Product variants value field is required"),
});
// Define the Zod schema for product inventory
const productInventoryZodValidation = zod_1.z.object({
    quantity: zod_1.z
        .number({ required_error: "Quantity filed is required" })
        .int()
        .lte(99999999999, "quantity is very long number")
        .nonnegative("Quantity cannot be negative"),
    inStock: zod_1.z
        .boolean()
        .refine((value) => value !== undefined, "Product inventory inStock field is required"),
});
// Define the main Zod schema for the product
const ProductZodValidation = zod_1.z.object({
    name: zod_1.z
        .string()
        .max(100, "Name must be at most 100 characters")
        .nonempty("Product name field is required")
        .trim(),
    description: zod_1.z
        .string()
        .max(1500, "Description must be at most 1500 characters")
        .nonempty("Product description field is required")
        .trim(),
    price: zod_1.z
        .number({ required_error: "product price filed is required" })
        .int()
        .lte(99999999999, "Price is very long number"),
    category: zod_1.z
        .string()
        .max(200, "Category must be at most 200 characters")
        .nonempty("Product category field is required")
        .trim(),
    tags: zod_1.z
        .array(zod_1.z.string().nonempty("Tags must contain non-empty strings").trim())
        .nonempty("Product tags field is required"),
    variants: zod_1.z
        .array(productVariantsZodValidation)
        .nonempty("Product variants field is required"),
    inventory: productInventoryZodValidation,
});
exports.ProductZodValidation = ProductZodValidation;
