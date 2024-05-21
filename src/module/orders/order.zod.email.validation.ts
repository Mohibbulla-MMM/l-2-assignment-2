import { z } from "zod";

const emailZodValidation = z.object({
  //   email: z.string().email().max(100, "email maxlength 100 characters"),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .max(30, "email maxlength 30 characters")
    .email("This is not a valid email."),
});

export { emailZodValidation };
