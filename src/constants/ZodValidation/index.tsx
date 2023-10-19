// <======== Interfaces ========> //
import { FormData } from "../../interfaces/FormData";

// <======== Hooks ========> //
import { ZodType, z } from "zod";

export const schema: ZodType<FormData> = z
  .object({
    userName: z.string().min(5, "نام‌کاربری نمی‌تواند کمتر از 5 حرف باشد!").max(20, "نام‌کاربری نمی‌تواند بیشتر از 20 حرف باشد!"),
    email: z.string().email(),
    password: z
      .string()
      .min(8, "رمز عبور نباید کمتر از 8 کاراکتر باشد!")
      .refine(
        (password) => /[A-Z]/.test(password), "رمز عبور باید شامل حداقل یک حرف بزرگ باشد!"
      )
      .refine(
        (password) => /\d/.test(password), "رمز عبور باید شامل حداقل یک عدد باشد!"
      ),
    fullName: z.string().min(6, "نام‌ کامل نمی‌تواند کمتر از 6 حرف باشد!").max(40, "نام‌کامل نمی‌تواند بیشتر از 40 حرف باشد!"),
  })