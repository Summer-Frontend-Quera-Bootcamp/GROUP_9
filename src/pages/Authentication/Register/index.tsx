// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import React, { useState } from "react";
import { registerUsers } from "../../../services/features/authentication/registerSlice";
import { useAppDispatch } from "../../../services/app/hooks";
import store from "../../../services/app/store";
import { useDispatch } from "react-redux";
import { showToast } from "../../../services/features/authentication/toastSlice";
const Register = () => {
  const dispatch = useAppDispatch();
  const Dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(registerUsers({ username, email, password }))
      .then((response) => {
        console.log(response);
        store.getState().register.error
          ? (Dispatch(showToast(response.payload)),
            setTimeout(() => Dispatch(showToast("")), 3000))
          : null;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Authentication page="register">
      <AuthenticationForm
        title="ثبت‌نام در کوئرا تسک‌منیجر"
        page="register"
        inputItems={[
          {
            type: "email",
            name: "email",
            label: "ایمیل",
            handler: handleEmailChange,
          },
          {
            type: "text",
            name: "userName",
            label: "نام کاربری",
            handler: handleUsernameChange,
          },
          {
            type: "password",
            name: "newPassword",
            label: "رمز عبور",
            handler: handlePasswordChange,
          },
        ]}
      >
        <>
          <div className="mt-[20px] flex justify-start items-center gap-xs">
            <input
              type="checkbox"
              name="contract"
              id="contract"
              className="w-[20px] h-[20px] rounded-[4px] border border-[#999] cursor-pointer"
            />
            <label
              htmlFor="contract"
              className="font-IranYekan500 font-BodyM text-right cursor-pointer"
            >
              قوانین و مقررات را می‌پذیرم.
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center"
          >
            ثبت‌نام
          </button>
        </>
      </AuthenticationForm>
    </Authentication>
  );
};

export default Register;
