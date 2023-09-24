<<<<<<< HEAD

import '../../../index.css'; 
import './style.css'
=======
// <======== Code-Files ========> //
import "./style.css";
>>>>>>> 64ffd4e2eac128462c2f42d26638c487fadd43a9

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

<<<<<<< HEAD
const Background:React.FC<Iprops>=({btn,text,children}):JSX.Element=>{
    return (
        <main className="w-screen h-screen overflow-hidden " dir='rtl'>
                <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(270deg, #06846F 0.35%, #54BEE8 103.4%)',
          clipPath: 'polygon(0 65%, 100% 45%, 100% 100%, 0% 100%)',
         
        }}
      ></div>
            <header className='flex  w-full px-[5rem] h-[50px] items-center absolute left-[50%] translate-x-[-50%] mr-auto top-[80px]'>
            <h1 className='ml-auto h-[55px] text-right font-extrabold text-[32px]  bg-gradient-to-r from-one to-two bg-clip-text text-three leading-[55.27px]' >کوئرا تسک منیجر</h1>
            <h2 className='ml-[10px] font-family:IranYekan text-[16px] font-medium leading-[27.68px] text-black h-[28px]'>{text}</h2>

                <button className='w-[95px] h-[40px] bg-brand-primary rounded-md p-2.5 text-white font-family:"IranYekan" mr-2.5 text-[14px] font-extrabold leading-[24.18px]'>{btn}</button>
               
            </header>
            {children}
           
        </main>
    )
}

export default Background
=======
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
>>>>>>> 64ffd4e2eac128462c2f42d26638c487fadd43a9
