// <======== Component-Files ========> //
import AuthenticationLayout from "../Layout";
import AuthenticationForm from "../../../components/Form";

// <======== Hook ========> //
import { z } from "zod";

const RegisterPage = () => {
  return (
    <AuthenticationLayout
      linkTextContent="قبلا ثبت‌ نام کرده‌ای؟"
      buttonTextContent="ورود"
    >
      <AuthenticationForm
        title="ثبت‌نام در کوئرا تسک‌منیجر"
        buttonTextContent="ثبت‌نام"
        contranctCheckbox
        items={[
          {
            type: "text",
            name: "username",
            label: "نام کامل",
          },
          {
            type: "password",
            name: "password",
            label: "رمزعبور",
          },
          {
            type: "email",
            name: "email",
            label: "ایمیل",
          },
        ]}
        schema={z.object({
          username: z
            .string()
            .min(3, { message: "حداقل تعداد کاراکتر 3 تا می‌باشد!" }),
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
          email: z.string().email("ایمیل وارد شده صحیح نمی‌باشد!"),
        })}
      />
    </AuthenticationLayout>
  );
};

export default RegisterPage;
