import "./index.css"
// <======== Assest-Import ========> //
import { ToastErrorIcon } from "../../../assets/Icons/Authentication/ToastError";

// <======== Component-Import ========> //

// <======== Hooks ========> //


const AuthenticationToast = (): JSX.Element => {
  return (
    <div id="toast" className="w-full fixed top-[50px] flex justify-center items-center show">
      <div className="py-[15px] pr-[10px] pl-[15px] rounded-[4px] border-r-4 shadow-toast font-IranYekan400 text-Red-Primary flex gap-xs">
        {ToastErrorIcon}
        اطلاعات وارد شده صحیح نمی‌باشد !
      </div>
    </div>
  );
};

export default AuthenticationToast;
