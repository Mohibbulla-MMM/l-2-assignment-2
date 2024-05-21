import { z } from "zod";


// Define the Zod schema for product variants
const productVariantsZodValidation = z.object({
  type: z
    .string()
    .max(100, "Type must be at most 100 characters")
    .trim()
    .nonempty("Product variants type field is required"),
  value: z
    .string()
    .max(200, "Value must be at most 200 characters")
    .trim()
    .nonempty("Product variants value field is required"),
});

// Define the Zod schema for product inventory
const productInventoryZodValidation = z.object({
  quantity: z
    .number({ required_error: "Quantity filed is required" })
    .int()
    .lte(99999999999, "quantity is very long number")
    .nonnegative("Quantity cannot be negative"),
  inStock: z
    .boolean()
    .refine(
      (value) => value !== undefined,
      "Product inventory inStock field is required"
    ),
});

// Define the main Zod schema for the product
const ProductZodValidation = z.object({
  name: z
    .string()
    .max(100, "Name must be at most 100 characters")
    .nonempty("Product name field is required")
    .trim(),
  description: z
    .string()
    .max(1500, "Description must be at most 1500 characters")
    .nonempty("Product description field is required")
    .trim(),
  price: z
    .number({ required_error: "product price filed is required" })
    .int()
    .lte(99999999999, "Price is very long number"),
  category: z
    .string()
    .max(200, "Category must be at most 200 characters")
    .nonempty("Product category field is required")
    .trim(),
  tags: z
    .array(z.string().nonempty("Tags must contain non-empty strings").trim())
    .nonempty("Product tags field is required"),
  variants: z
    .array(productVariantsZodValidation)
    .nonempty("Product variants field is required"),
  inventory: productInventoryZodValidation,
});

export { ProductZodValidation };
