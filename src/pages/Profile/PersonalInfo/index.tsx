import { useForm } from "react-hook-form";
import { ColorList } from "../../../constants/ColorList";
import Profile from "../../../layouts/Profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../../constants/ZodValidation";
import Input from "../../../components/common/Input";
import { FormData } from "../../../interfaces/FormData";

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  const color = ColorList.get("Brand");
  return (
    <Profile>
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
              handler={() => {}}
            />
            <Input
              type="text"
              name="userName"
              label="نام کاربری"
              error={errors}
              hook={register}
              handler={() => {}}
            />
            <Input
              type="password"
              name="password"
              label="رمز عبور فعلی"
              error={errors}
              hook={register}
              handler={() => {}}
            />
            <Input
              type="password"
              name="password"
              label="رمز عبور جدید"
              error={errors}
              hook={register}
              handler={() => {}}
            />
            <Input
              type="password"
              name="password"
              label="تکرار رمز عبور جدید"
              error={errors}
              hook={register}
              handler={() => {}}
            />
            <button
              className={`w-full mt-xl py-xs px-s rounded-[6px] ${color?.bgPrimary} font-IranYekan800 text-[14px] text-White flex justify-center items-center cursor-pointer`}
            >
              ثبت تغییرات
            </button>
          </form>
        </main>{" "}
      </>
    </Profile>
  );
};

export default UserInformation;
