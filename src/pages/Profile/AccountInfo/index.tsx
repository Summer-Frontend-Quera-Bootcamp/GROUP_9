import { useForm } from "react-hook-form";
import { FormData } from "../../../interfaces/FormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../../constants/ZodValidation";
import { ColorList } from "../../../constants/ColorList";
import Input from "../../../components/common/Input";
import Profile from "../../../components/common/MembersCard/Profile";
import { useState } from "react";
import { useAppDispatch } from "../../../services/app/hooks";
import { editprofile } from "../../../services/features/profile/profileSlice";

const AccountInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  const submitData = () => {
    dispatch(
      editprofile({
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      })
    );
    localStorage.setItem("first_name", firstName);
    localStorage.setItem("last_name", lastName);
  };

  const color = ColorList.get("Brand");
  return (
    <>
      <h2 className="font-IranYekan700 text-[31px]">اطلاعات فردی</h2>
      <main className="w-full flex flex-col gap-l items-start">
        <div className="h-[100px] flex gap-s justify-start items-center">
          <Profile
            width="w-[100px]"
            fontSize="text-[35px]"
            fontWeight="font-IranYekan500"
            Member={{username: String(localStorage.getItem("user_name"))}}
          />
          <div className="flex flex-col gap-s items-center">
            <button
              className={`p-[10px] border border-Brand-Primary rounded-[8px] font-IranYekan500 text-[20px] ${color?.textPrimary} flex justify-center items-center hover:${color?.bgPrimary} hover:text-White`}
            >
              ویرایش تصویر پروفایل
            </button>
            <p className="font-IranYekan400 text-[#8A8989] text-[12px]">
              این تصویر برای عموم قابل نمایش است.
            </p>
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit(submitData)}>
          <Input
            type="text"
            name="firstName"
            label="نام"
            error={errors}
            hook={register}
            handler={handleFirstNameChange}
          />
          <Input
            type="text"
            name="lastName"
            label="نام‌خانوادگی"
            error={errors}
            hook={register}
            handler={handleLastNameChange}
          />
          <Input
            type="tel"
            name="phone"
            label="شماره موبایل"
            error={errors}
            hook={register}
            handler={handlePhoneNumberChange}
          />
          <button
            onClick={submitData}
            className={`w-full mt-xl py-xs px-s rounded-[6px] ${color?.bgPrimary} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
          >
            ثبت تغییرات
          </button>
        </form>
      </main>
    </>
  );
};

export default AccountInformation;
