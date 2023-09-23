// <======== Code-Files ========> //
import "../../../index.css";

// <======== Component-Files ========> //
import AuthenticationLayout from "../Layout";
import AuthenticationForm from "../../../components/Form";

// <======== Hook ========> //
import { z } from "zod";

const ForgetPasswordPage = () => {
  return (
    <AuthenticationLayout
      linkTextContent="قبلا ثبت‌نام کرده‌ای؟"
      buttonTextContent="ورود"
    >
      <AuthenticationForm
        title="فراموشی رمز عبور"
        buttonTextContent="دریافت ایمیل بازیابی رمزعبور"
        items={[
          {
            type: "email",
            name: "email",
            label: "ایمیل خود را وارد کنید",
          },
        ]}
        schema={z.object({
          email: z.string().email("ایمیل وارد شده صحیح نمی‌باشد!"),
        })}
      />
    </AuthenticationLayout>
  );
};

export default ForgetPasswordPage;
