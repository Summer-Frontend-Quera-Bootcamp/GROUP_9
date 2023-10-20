// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import React, { useState, useEffect } from "react";
import { resetPassword } from "../../../services/features/authentication/resetSlice";
import { useAppDispatch } from "../../../services/app/hooks";
import { useSearchParams } from "react-router-dom";
const ResetPassword = () => {
  const dispatch = useAppDispatch();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [token, setToken] = useState<string | null>("");
  const [error, setError] = useState("");
  useEffect(() => {
    searchParams.has("token")
      ? setToken(searchParams.get("token"))
      : setToken("");
  }, []);
  const [searchParams] = useSearchParams();
  const handlePassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
  };
  const handlePassword2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };

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
