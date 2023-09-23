// <======== Code-Files ========> //
import "../../../index.css";
import "./style.css";

// <======== Component-Files ========> //
import Button from "../../../components/common/Button";

interface IAuthenticationLayoutprops extends React.PropsWithChildren {
  buttonTextContent: string;
  linkTextContent: string;
}

const AuthenticationLayout: React.FC<IAuthenticationLayoutprops> = ({
  buttonTextContent,
  linkTextContent,
  children,
}): JSX.Element => {
  return (
    <main className="w-full h-full pt-[80px] pb-0 px-[80px] flex flex-col justify-start items-center">
      <header className="w-full max-w-[1280px] fixed top-[80px] flex flex-row justify-between items-center">
        <h1 className="font-IranYekan800 text-HeadingL">کوئرا تسک منیجر</h1>
        <section className="flex justify-end items-center gap-[7px]">
          <p className="font-IranYekan500 text-BodyM text-Black">
            {linkTextContent}
          </p>
          <Button ClassName="w-[95px] h-xl p-[10px] font-IranYekan800 text-BoldS text-White rounded-[6px] bg-Brand-Primary flex justify-center items-center">
            {buttonTextContent}
          </Button>
        </section>
      </header>
      <main className="w-full h-full mt-[55px] flex justify-center items-center">
        {children}
      </main>

      <svg
        className="w-full fixed inset-x-0 -bottom-[125px] -z-1"
        viewBox="0 0 1440 574"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 260L1440 0V574H0V260Z" fill="url(#paint0_linear_2_981)" />
        <defs>
          <linearGradient
            id="paint0_linear_2_981"
            x1="1440"
            y1="257.5"
            x2="-55"
            y2="287"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#06846F" />
            <stop offset="1" stop-color="#54BEE8" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  );
};

export default AuthenticationLayout;
