// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import { z } from "zod";

const LogIn = () => {
  return (
    <Authentication
      linkTextContent="ثبت‌نام نکرده‌ای؟"
      buttonTextContent="ثبت‌نام"
    >
      <AuthenticationForm
        title="به کوئرا تسک‌منیجر خوش برگشتی :)"
        buttonTextContent="ورود"
        forgetPageLink
        signupPageLink
        items={[
          {
            type: "email",
            name: "email",
            label: "ایمیل",
          },
          {
            type: "password",
            name: "password",
            label: "رمزعبور",
          },
        ]}
        schema={z.object({
          email: z.string().email("ایمیل وارد شده صحیح نمی‌باشد!"),
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
    </Authentication>
  );
};

export default LogIn;