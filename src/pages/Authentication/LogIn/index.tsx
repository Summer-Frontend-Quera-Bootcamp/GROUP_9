// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { fetchUsers } from "../../../services/features/authentication/loginSlice";
import { useAppDispatch } from "../../../services/app/hooks";
import { showToast } from "../../../services/features/authentication/toastSlice";
import { useDispatch } from "react-redux";
import store from "../../../services/app/store";
import { useNavigate } from "react-router-dom";

// <======== Store ========> //
// <======== Slices ========> //
// <======== Features ========> //

const Login: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const Dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(fetchUsers({ username, password }))
      .then((response: any) => {
        const access = store.getState().user.access;
        //const refresh = store.getState().user.refresh;
        // console.log("access is : ", access);
        // console.log("refresh is :", refresh);
        //AXIOS.defaults.headers.common.Authorization = `Bearer ${access}`;
        localStorage.setItem("access", access);
        store.getState().user.error
          ? (Dispatch(showToast(response.payload)),
            setTimeout(() => Dispatch(showToast("")), 3000))
          : navigate("/taskmanager");
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <Authentication page="login">
      <AuthenticationForm
        title="به کوئرا تسک‌منیجر خوش برگشتی :)"
        page="login"
        inputItems={[
          {
            type: "text",
            name: "userName",
            label: "نام کاربری",
            handler: handleUsernameChange,
          },
          {
            type: "password",
            name: "password",
            label: "رمز عبور",
            handler: handlePasswordChange,
          },
        ]}
      >
        <>
          <Link
            to={"/Forget-password"}
            className="text-right font-IranYekan800 text-BoldXS text-Brand-Primary mt-xs cursor-pointer"
          >
            رمز عبور را فراموش کرده‌ای؟
          </Link>
          <button
            onClick={handleSubmit}
            className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center"
          >
            ورود
          </button>
          <p className="mt-m text-center font-IranYekan500 text-BodyM">
            ثبت‌نام نکرده‌ای؟
            <span>
              <Link
                className="mr-[7px] text-Brand-Primary font-IranYekan800 text-BoldM"
                to={"/Register"}
              >
                ثبت‌نام
              </Link>
            </span>
          </p>
        </>
      </AuthenticationForm>
    </Authentication>
  );
};

export default Login;
