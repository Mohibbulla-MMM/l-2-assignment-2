import { z } from "zod";

// Define the Zod schema for product variants
const updateVariantsZodValidation = z.object({
  type: z
    .string()
    .max(100, "Type must be at most 100 characters")
    .trim()
    .optional(),
  value: z
    .string()
    .max(200, "Value must be at most 200 characters")
    .trim()
    .optional(),
});

// Define the Zod schema for product inventory
const updateInventoryZodValidation = z.object({
  quantity: z
    .number()
    .int()
    .lte(99999999999, "quantity is very long number")
    .nonnegative("Quantity cannot be negative")
    .optional(),

  inStock: z
    .boolean()
    .refine(
      (value) => value !== undefined,
      "Product inventory inStock field value type is boolean"
    )
    .optional(),
});

// Define the main Zod schema for the product
const ProductUpdateZodValidation = z.object({
  name: z
    .string()
    .max(100, "Name must be at most 100 characters")
    .trim()
    .optional(),
  description: z
    .string()
    .max(1500, "Description must be at most 1500 characters")
    .trim()
    .optional(),
  price: z
    .number()
    .int()
    .lte(99999999999, "Price is very long number")
    .optional(),

  category: z
    .string()
    .max(200, "Category must be at most 200 characters")
    .trim()
    .optional(),
  tags: z
    .array(z.string().nonempty("Tags must contain non-empty strings").trim())
    .optional(),

  variants: z.array(updateVariantsZodValidation).optional(),

  inventory: updateInventoryZodValidation.optional(),
});

export { ProductUpdateZodValidation };
