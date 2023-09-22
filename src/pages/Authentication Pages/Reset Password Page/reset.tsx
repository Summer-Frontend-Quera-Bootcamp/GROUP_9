import Form_base from "../../../components/form/form";
import Background from "../Layout";
import { z } from "zod";

const Reset = () => {
    return (
        <Background text="قبلا ثبت نام کرده ای؟" btn="ورود">
            <Form_base
                btn_text="تغییر رمز عبور"
                items={[
                    { type: "password", name: "password", label: "رمز عبور جدید را وارد کنید" },
                ]}
                schema={z.object({
                    password: z.string()
                        .min(8, "رمز عبور باید حداقل 8 حرف داشته باشد")
                        .refine(
                            (password) => /[A-Z]/.test(password),
                            "رمز عبور باید دارای حداقل یک حرف بزرگ باشد"
                        )
                        .refine(
                            (password) => /\d/.test(password),
                            "رمز عبور باید دارای حداقل یک رقم باشد"
                        ),
                })}
                title="بازیابی رمز عبور"
            />
        </Background>
    );
};

export default Reset;