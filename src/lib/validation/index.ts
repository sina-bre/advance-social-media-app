import * as z from "zod";

export const SignUpValidationSchema = z.object({
  name: z
    .string()
    .min(2, { message: "The name is too short" })
    .max(50, { message: "The name is too long" }),
  username: z
    .string()
    .min(2, { message: "The username is too short" })
    .max(50, { message: "The username is too long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "The password must be at least 8 characters}" })
    .max(30, { message: "The password is too long" }),
});
