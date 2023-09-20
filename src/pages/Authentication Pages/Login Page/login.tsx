import Background from "../Layout";
import Form_base from "../../../components/form/form";
import { z } from "zod";
const Login = () => {
  return (
    <Background text="ثبت نام نکرده ای؟" btn="ثبت نام">
      <Form_base
        btn_text="ورود"
        forget
        signup
        items={[
          { type: "email", name: "email", label: "ایمیل" },
          { type: "password", name: "pass", label: "رمز عبور" },
        ]}
        schema={z.object({
          pass: z
            .string()
            .min(8, "Password should be at least 8 characters")
            .refine(
              (password) => /[A-Z]/.test(password),
              "Password should have at least one uppercase letter"
            )
            .refine(
              (password) => /\d/.test(password),
              "Password should have at least one number"
            ),
          email: z.string().email(),
        })}
        title="به کوئرا تسک منیجر خوش برگشتی :) "
      />
    </Background>
  );
};

export default Login;
