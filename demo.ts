import { z } from "zod";
// product varient object
const productVariantsZodValidation = z.object({
  type: z
    .string()
    .max(100)
    .nonempty("Product variants type field is required. up to 100 characters"),
  value: z
    .string()
    .max(200)
    .nonempty("Product variants value field is requird. up to 200 characters"),
});
//product inventory object
const productInventoryZodValidation = z.object({
  quantity: z
    .number({ required_error: "Product inventory quantity field is required" })
    .nonnegative()
    .int(),
  inStock: z
    .boolean()
    .refine(
      (value) => value !== undefined,
      "Product inventory inStock field is required"
    ),
});

// main product object
const ProductZodValidation = z.object({
  name: z.string().max(100).nonempty("Product name field is required"),
  description: z
    .string()
    .max(1500)
    .nonempty("Product description field is required"),
  price: z
    .number({
      required_error: "Product price field is required",
    })
    .max(20),
  category: z.string().max(100).nonempty("Product category field is required"),
  tags: z
    .array(z.string().nonempty("Tags must contain non-empty strings"))
    .nonempty("Product tags field is required"),
  variants: z
    .array(productVariantsZodValidation)
    .nonempty("Product variants field is required"),
  inventory: productInventoryZodValidation,
});

export { ProductZodValidation };
