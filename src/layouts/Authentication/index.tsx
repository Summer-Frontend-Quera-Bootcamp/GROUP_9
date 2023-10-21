// <======== Assest-Import ========> //
import { BackGroundImage } from "../../assets/Icons/Authentication/BackGround";

// <======== Component-Import ========> //
import LoginOrSignupButton from "../../components/Athentication/LoginOrSignupButton";
import AuthenticationToast from "./AuthenticationToast";

// <======== Hooks ========> //

interface TAuthenticationProps extends React.PropsWithChildren {
  page: "login" | "register" | "resetpassword" | "forgetpassword" | "success";
}

const Authentication: React.FC<TAuthenticationProps> = ({
  page,
  children,
}): JSX.Element => {
  return (
    <>
      <AuthenticationToast />
      <main className="w-full h-full pt-[80px] pb-0 px-[80px] flex flex-col justify-start items-center">
        <header className="w-full max-w-[1280px] fixed top-[80px] flex flex-row justify-between items-center">
          <h1 className="font-IranYekan800 text-HeadingL">کوئرا تسک منیجر</h1>
          {page === "login" ? (
            <LoginOrSignupButton
              textContent="ثبت‌نام نکرده‌ای؟"
              buttonContent="ثبت‌نام"
            />
          ) : (
            <LoginOrSignupButton
              textContent="قبلا ثبت‌نام کرده‌ای؟"
              buttonContent="ورود"
            />
          )}
        </header>
        <main className="w-full h-full mt-[55px] flex justify-center items-center">
          {children}
        </main>
        {BackGroundImage}
      </main>
    </>
  );
};

export default Authentication;
