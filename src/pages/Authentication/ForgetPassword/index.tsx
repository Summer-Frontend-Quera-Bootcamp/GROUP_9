// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import React, { useState } from "react";
import { useAppDispatch } from "../../../services/app/hooks";
import { forgetPassword } from "../../../services/features/authentication/forgotSlice";
import store from "../../../services/app/store";
import { showToast } from "../../../services/features/authentication/toastSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { fetchAccess } from "../../../services/features/authentication/refreshSlice";
const ForgetPassword = () => {
  const dispatch = useAppDispatch();
  const Dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    //dispatch(fetchAccess({ refresh: String(localStorage.getItem("refresh")) }));
    dispatch(forgetPassword({ email }))
      .then((response) => {
        console.log(response);
        console.log(localStorage.access);
        console.log(localStorage.refresh);
        store.getState().forget.error
          ? (Dispatch(showToast(response.payload)),
            setTimeout(() => Dispatch(showToast("")), 3000))
          : navigate("/Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Authentication page="forgetpassword">
      <AuthenticationForm
        title="فراموشی رمز عبور"
        page="forgetpassword"
        inputItems={[
          {
            type: "email",
            name: "email",
            label: "ایمیل خود را وارد کنید",
            handler: handleEmailChange,
          },
        ]}
      >
        <button
          onClick={handleSubmit}
          className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center"
        >
          دریافت ایمیل بازیابی رمز عبور
        </button>
      </AuthenticationForm>
    </Authentication>
  );
};

export default ForgetPassword;
