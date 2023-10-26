// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Input from "../../common/Input";

// <======== Intefaces ========> //
import { FormData } from "../../../interfaces/FormData";

// <======== Constants ========> //
import { schema } from "../../../constants/ZodValidation";

// <======== Hooks ========> //
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormProps extends React.PropsWithChildren {
  page: "login" | "register" | "resetpassword" | "forgetpassword" | "success";
  title:
    | "به کوئرا تسک‌منیجر خوش برگشتی :)"
    | "ثبت‌نام در کوئرا تسک‌منیجر"
    | "فراموشی رمز عبور"
    | "بازیابی رمز عبور";
  inputItems?: {
    type: "text" | "password" | "email";
    name:
      | "userName"
      | "password"
      | "newPassword"
      | "setNewpassword"
      | "fullName"
      | "email";
    label:
      | "نام کاربری"
      | "رمز عبور"
      | "نام کامل"
      | "ایمیل"
      | "ایمیل خود را وارد کنید"
      | "رمز عبور جدید را وارد کنید"
      | "تکرار رمز عبور جدید";
    //adding handler
    handler: (arg: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
}

const AuthenticationForm: React.FC<IFormProps> = ({
  title,
  page,
  inputItems,
  children,
}): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="w-[640px] p-m rounded-[20px] bg-White flex flex-col items-start z-50 shadow-4xl">
      <header className="w-full font-IranYekan800 text-HeadingL text-center select-none">
        {title}
      </header>
      {page !== "success" ? (
        <form
          className="w-full mt-[32px] flex flex-col"
          onSubmit={handleSubmit(submitData)}
        >
          {inputItems?.map((item) => (
            <Input
              type={item.type}
              name={item.name}
              label={item.label}
              hook={register}
              error={errors}
              handler={item.handler}
              key={item.name}
            />
          ))}
          {children}
        </form>
      ) : (
        children
      )}
    </section>
  );
};

export default AuthenticationForm;
