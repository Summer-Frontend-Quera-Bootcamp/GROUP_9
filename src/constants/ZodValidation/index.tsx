// <======== Interfaces ========> //
import { FormData } from "../../interfaces/FormData";

// <======== Hooks ========> //
import { ZodType, z } from "zod";

export const schema: ZodType<FormData> = z
  .object({
    // ================= UserName Validation ================= //
    userName: z
      .string()
      .nonempty("نام‌کاربری خود را وارد کنید!")
      .max(150, "نام‌کاربری نمی‌تواند بیشتر از 150 حرف باشد!"),

    // ================= Email Validation ================= //
    email: z
      .string()
      .nonempty("ایمیل خود را وارد کنید!")
      .email({ message: "ایمیل وارد شده صحیح نمی‌باشد!" }),

    // ================= Password Validation ================= //
    //For Login:
    password: z.string().nonempty("رمز عبور خود را وارد کنید!"),
    //For Register | ResetPassword:
    newPassword: z
      .string()
      .nonempty("رمزعبور خود را وارد کنید!")
      .min(8, "رمز عبور نباید کمتر از 8 کاراکتر باشد!")
      .max(32, "رمز عبور نباید بیشتر از 32 کاراکتر داشته باشد!"),
    setNewpassword: z
      .string()
      .nonempty("رمزعبور خود را وارد کنید!")
      .min(8, "رمز عبور نباید کمتر از 8 کاراکتر باشد!")
      .max(32, "رمز عبور نباید بیشتر از 32 کاراکتر داشته باشد!"),
    // ================= Name Validation ================= //
    //User-FullName:
    fullName: z
      .string()
      .min(6, "نام‌ کامل نمی‌تواند کمتر از 6 حرف باشد!")
      .max(40, "نام‌کامل نمی‌تواند بیشتر از 40 حرف باشد!"),
    //User-FirstName:

    //User-LastName:

    //WorkspaceName:
    newworkspacename: z.string().min(5, "hey bro "),

    //ProjectName:
  })
  .refine((data) => data.newPassword === data.setNewpassword, {
    message: "تکرار رمز عبور اشتباه است!",
    path: ["setNewpassword"],
  });
