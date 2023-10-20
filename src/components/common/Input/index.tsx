// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Intefaces ========> //
import { FormData } from "../../../interfaces/FormData";

// <======== Hooks ========> //
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface IInputProps {
  label:
    | "نام کاربری"
    | "رمز عبور"
    | "نام کامل"
    | "ایمیل"
    | "ایمیل خود را وارد کنید"
    | "رمز عبور جدید را وارد کنید"
    | "نام پروژه"
    | "نام ورک‌اسپیس"
    | "نام"
    | "نام‌خانوادگی"
    | "شماره موبایل"
    | "رمز عبور فعلی"
    | "رمز عبور جدید"
    | "تکرار رمز عبور جدید";
  type: "text" | "password" | "email" | "tel";
  name:
    | "userName"
    | "password"
    | "password1"
    | "password2"
    | "fullName"
    | "email"
    | "projectName"
    | "workspaceName"
    | "firstName"
    | "lastName"
    | "phone"
    | "confirmPassword";
  hook: UseFormRegister<FormData>;
  error: FieldErrors<FormData>;
  //adding handler
  handler: any;
}

const Input: React.FC<IInputProps> = ({
  type,
  name,
  label,
  hook,
  error,
  handler,
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-xs">
      <label
        htmlFor={name}
        className="mt-[20px] font-IranYekan400 text-BodyS text-right"
      >
        {label}
      </label>
      <input
        type={type}
        {...hook(name)}
        id={name}
        className="w-full h-[40px] p-[5px] rounded-[6px] bg-inherite border border-[#AAA]"
        onChange={handler}
      />
      {error[name] && (
        <p className="font-IranYekan400 text-BodyXS text-Red-Primary">
          {error[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
