// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Authentication from "../../../layouts/Authentication";
import AuthenticationForm from "../../../components/Athentication/Form";

// <======== Hooks ========> //
import { Link } from "react-router-dom";


const Login: React.FC = (): JSX.Element => {
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
          },
          {
            type: "password",
            name: "password",
            label: "رمز عبور",
          },
        ]}
      >
        <>
          <Link
            to={"/authentication/forgetpassword"}
            className="text-right font-IranYekan800 text-BoldXS text-Brand-Primary mt-xs cursor-pointer"
          >
            رمز عبور را فراموش کرده‌ای؟
          </Link>
          <button className="w-full h-[48px] p-[10px] mt-[20px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White flex justify-center items-center">
            ورود
          </button>
          <p className="mt-m text-center font-IranYekan500 text-BodyM">
            ثبت‌نام نکرده‌ای؟
            <span>
              <Link
                className="mr-[7px] text-Brand-Primary font-IranYekan800 text-BoldM"
                to={"/authentication/register"}
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
