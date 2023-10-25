import "./index.css";
// <======== Assest-Import ========> //
import { ToastErrorIcon } from "../../../assets/Icons/Authentication/ToastError";

// <======== Component-Import ========> //

// <======== Hooks ========> //
import { useSelector } from "react-redux/es/hooks/useSelector";

const AuthenticationToast = (): JSX.Element => {
  const text = useSelector((state: any) => state.authToast.text);
  const ClassName = "w-full fixed top-[50px] flex justify-center items-center";
  return (
    <div id="toast" className={text ? ClassName + " show" : ClassName}>
      <div className="py-[15px] pr-[10px] pl-[15px] rounded-[4px] border-r-4 shadow-toast font-IranYekan400 text-Red-Primary flex gap-xs">
        {ToastErrorIcon}
        {text}
      </div>
    </div>
  );
};

export default AuthenticationToast;
