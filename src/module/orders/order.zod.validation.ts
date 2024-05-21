// orderValidation.ts
import { z } from "zod";

const orderZodValidation = z.object({
  email: z
    .string({
      required_error: "email field is required, and value string type",
    })
    .email("Invalid email format")
    .max(100, "Value Maxlenth 100 characters"),

  productId: z
    .string({
      required_error: "productId field is required, and value string type",
    })
    .max(100, "Value Maxlenth 100 characters"),

  price: z
    .number({
      required_error: "price field is required, and value number type",
    })
    .nonnegative("Price must be a positive number")
    .max(9999999999, "Value Maxlenth 10 characters"),

  quantity: z
    .number({
      required_error: "quantity field is required, and value number type",
    })
    .nonnegative("Quantity must be a positive number")
    .max(9999999999, "Value Maxlenth 10 characters"),
});

export { orderZodValidation };
