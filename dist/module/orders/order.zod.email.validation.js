"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailZodValidation = void 0;
const zod_1 = require("zod");
const emailZodValidation = zod_1.z.object({
    //   email: z.string().email().max(100, "email maxlength 100 characters"),
    email: zod_1.z
        .string()
        .min(1, { message: "This field has to be filled." })
        .max(30, "email maxlength 30 characters")
        .email("This is not a valid email."),
});
exports.emailZodValidation = emailZodValidation;
