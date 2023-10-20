import { Link } from "react-router-dom";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Hooks ========> //

interface ISectionProps {
  textContent: "ثبت‌نام نکرده‌ای؟" | "قبلا ثبت‌نام کرده‌ای؟";
  buttonContent: "ورود" | "ثبت‌نام";
}

const LoginOrSignupButton: React.FC<ISectionProps> = ({
  textContent,
  buttonContent,
}) => {
  return (
    <section className="flex justify-end items-center gap-[7px]">
      <p className="font-IranYekan500 text-BodyM text-Black">{textContent}</p>
      <Link to={buttonContent === "ورود" ? "/Login" : "/Register"}>
        <button className="w-[95px] h-xl p-[10px] font-IranYekan800 text-BoldS text-White rounded-[6px] bg-Brand-Primary flex justify-center items-center">
          {buttonContent}
        </button>
      </Link>
    </section>
  );
};

export default LoginOrSignupButton;
