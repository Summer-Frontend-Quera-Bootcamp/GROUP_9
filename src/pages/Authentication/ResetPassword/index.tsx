// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import React, { useState } from "react";
import { resetPassword } from "../../../services/features/authentication/resetSlice";
import { useAppDispatch } from "../../../services/app/hooks";

const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState("");

  const handlePassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
  };

  const handlePassword2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3ODEzMzE4LCJpYXQiOjE2OTc3OTE3MTgsImp0aSI6ImViZDdiMGMxZDBhMTQzMjliNjQzNjMyYWQ1ODQ2YWI0IiwidXNlcl9pZCI6MTIwfQ.U2Wj-B8nVaHS2GdEoghWnJsQhPZs5hmItU_zY8kTSTE";
  const handleSubmit = () => {
    dispatch(resetPassword({ token, password1, password2 }))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        setError(error.message || "Something went wrong");
      });
  };
  return (
    <Authentication page="resetpassword">
      <AuthenticationForm
        title="بازیابی رمز عبور"
        page="resetpassword"
        inputItems={[
          {
            type: "password",
            name: "password1",
            label: "رمز عبور جدید را وارد کنید",
            handler: handlePassword1Change,
          },
          {
            type: "password",
            name: "password2",
            label: "تکرار رمز عبور جدید",
            handler: handlePassword2Change,
          },
        ]}
      >
        <button
          onClick={handleSubmit}
          className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center"
        >
          تغییر رمز عبور
        </button>
      </AuthenticationForm>
    </Authentication>
  );
};

export default ResetPassword;
