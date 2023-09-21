import Form_base from "../../../components/form/form";
import Background from "../Layout";
import { z } from "zod";

const Forgot = () => {
  return (
    <Background text="قبلا ثبت نام کرده ای؟" btn="ورود">
      <Form_base
        btn_text="دریافت ایمیل بازیابی رمز عبور"
        items={[
          { type: "email", name: "email", label: " ایمیل خود را وارد کنید" },
        ]}
        schema={z.object({
          email: z.string().email(),
        })}
        title="فراموشی رمز عبور"
      />
    </Background>
  );
};

export default Forgot;
