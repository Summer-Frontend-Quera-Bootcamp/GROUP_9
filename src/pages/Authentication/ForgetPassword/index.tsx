// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import { z } from "zod";

const ForgetPassword = () => {
  return (
    <Authentication
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
    </Authentication>
  );
};

export default ForgetPassword;
