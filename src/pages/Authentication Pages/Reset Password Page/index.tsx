// <======== Code-Files ========> //
import "../../../index.css";

// <======== Component-Files ========> //
import AuthenticationLayout from "../Layout";
import AuthenticationForm from "../../../components/Form";

// <======== Hook ========> //
import { z } from "zod";

const ResetPasswordPage = () => {
  return (
    <AuthenticationLayout
      linkTextContent="قبلا ثبت‌نام کرده‌ای؟"
      buttonTextContent="ورود"
    >
      <AuthenticationForm
        title="بازیابی رمز عبور"
        buttonTextContent="تغییر رمز عبور"
        items={[
          {
            type: "password",
            name: "password",
            label: "رمزعبور جدید را وارد کنید",
          },
        ]}
        schema={z.object({
          password: z
            .string()
            .min(8, "رمزعبور نباید کمتر از 8 کاراکتر باشد!")
            .refine(
              (password) => /[A-Z]/.test(password),
              "رمزعبور باید شامل حداقل یک حرف بزرگ باشد."
            )
            .refine(
              (password) => /\d/.test(password),
              "رمزعبور باید شامل حداقل یک عدد باشد."
            ),
        })}
      />
    </AuthenticationLayout>
  );
};

export default ResetPasswordPage;
