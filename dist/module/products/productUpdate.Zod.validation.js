"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateZodValidation = void 0;
const zod_1 = require("zod");
// Define the Zod schema for product variants
const updateVariantsZodValidation = zod_1.z.object({
    type: zod_1.z
        .string()
        .max(100, "Type must be at most 100 characters")
        .trim()
        .optional(),
    value: zod_1.z
        .string()
        .max(200, "Value must be at most 200 characters")
        .trim()
        .optional(),
});
// Define the Zod schema for product inventory
const updateInventoryZodValidation = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .int()
        .lte(99999999999, "quantity is very long number")
        .nonnegative("Quantity cannot be negative")
        .optional(),
    inStock: zod_1.z
        .boolean()
        .refine((value) => value !== undefined, "Product inventory inStock field value type is boolean")
        .optional(),
});
// Define the main Zod schema for the product
const ProductUpdateZodValidation = zod_1.z.object({
    name: zod_1.z
        .string()
        .max(100, "Name must be at most 100 characters")
        .trim()
        .optional(),
    description: zod_1.z
        .string()
        .max(1500, "Description must be at most 1500 characters")
        .trim()
        .optional(),
    price: zod_1.z
        .number()
        .int()
        .lte(99999999999, "Price is very long number")
        .optional(),
    category: zod_1.z
        .string()
        .max(200, "Category must be at most 200 characters")
        .trim()
        .optional(),
    tags: zod_1.z
        .array(zod_1.z.string().nonempty("Tags must contain non-empty strings").trim())
        .optional(),
    variants: zod_1.z.array(updateVariantsZodValidation).optional(),
    inventory: updateInventoryZodValidation.optional(),
});
exports.ProductUpdateZodValidation = ProductUpdateZodValidation;
