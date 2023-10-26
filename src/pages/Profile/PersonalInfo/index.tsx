import { useForm } from "react-hook-form";
import { ColorList } from "../../../constants/ColorList";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../../constants/ZodValidation";
import Input from "../../../components/common/Input";
import { FormData } from "../../../interfaces/FormData";
import { useAppDispatch } from "../../../services/app/hooks";
import { useState } from "react";
import { editprofile } from "../../../services/features/profile/profileSlice";
import { changepassword } from "../../../services/features/profile/changePasswordSlice";

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword1, setNewPassword1] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(e.target.value);
  };
  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const handleNewPassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword1(e.target.value);
  };

  const submitData = () => {
    dispatch(
      editprofile({
        email: email,
        username: userName,
      })
    );
    dispatch(
      changepassword({
        old_password: oldPassword,
        new_password: newPassword,
        new_password1: newPassword1,
      })
    );
    localStorage.setItem("email", email);
    localStorage.setItem("username", userName);
  };

  const color = ColorList.get("Brand");

  return (
    <>
      <header>
        <h2 className="font-IranYekan700 text-[31px]">اطلاعات حساب</h2>
      </header>
      <main className="w-full flex flex-col gap-m items-start">
        <form className="w-full" onSubmit={handleSubmit(submitData)}>
          <Input
            type="email"
            name="email"
            label="ایمیل"
            error={errors}
            hook={register}
            handler={handleEmailChange}
          />
          <Input
            type="text"
            name="userName"
            label="نام کاربری"
            error={errors}
            hook={register}
            handler={handleUserNameChange}
          />
          <Input
            type="password"
            name="password"
            label="رمز عبور فعلی"
            error={errors}
            hook={register}
            handler={handleOldPasswordChange}
          />
          <Input
            type="password"
            name="password"
            label="رمز عبور جدید"
            error={errors}
            hook={register}
            handler={handleNewPasswordChange}
          />
          <Input
            type="password"
            name="password"
            label="تکرار رمز عبور جدید"
            error={errors}
            hook={register}
            handler={handleNewPassword1Change}
          />
          <button
            className={`w-full mt-xl py-xs px-s rounded-[6px] ${color?.bgPrimary} font-IranYekan800 text-[14px] text-White flex justify-center items-center cursor-pointer`}
            onClick={submitData}
          >
            ثبت تغییرات
          </button>
        </form>
      </main>
    </>
  );
};

export default UserInformation;
