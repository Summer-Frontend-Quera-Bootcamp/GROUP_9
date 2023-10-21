// <======== Assest-Import ========> //
import { ModalArrowLeftButtonIcon } from "../../../../assets/Icons/CommonComponents/Modal/ModalArrowLeftButton";
import { PrimaryModalCloseButtonIcon } from "../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton";

// <======== Component-Import ========> //

// <======== Constants ========> //


interface IModalProps extends React.PropsWithChildren {
  title:
    | "ساختن پروژه جدید"
    | "ساختن ورک‌اسپیس جدید"
    | "انتخاب رنگ ورک‌اسپیس"
    | "مرور اطلاعات"
    | "به اشتراک‌گذاری پروژه"
    | "به اشتراک‌گذاری تسک"
    | "به اشتراک‌گذاری ورک‌اسپیس";
  isBackButton?: boolean;
  //Classes
  visibility?: "visible" | "invisible";
  padding?: "p-m" | "p-[20px]";
  rounded?: "rounded-[8px]" | "rounded-[12px]";
}

const Modal: React.FC<IModalProps> = ({
  title,
  isBackButton = false,
  visibility = "invisible",
  padding = "p-m",
  rounded = "rounded-[8px]",
  children,
}): JSX.Element => {
  return (
    <div
      className={`${visibility} fixed top-0 left-0 w-screen h-screen bg-ModalBG flex justify-center items-center z-30`}
    >
      <div
        className={`relative w-[500px] ${padding} ${rounded} bg-White flex flex-col gap-xl justify-center items-center`}
      >
        <header className="w-full flex justify-between items-center">
          <div className="p-[2px] rounded-[4px] hover:bg-Gray-Secondary cursor-pointer">
            {PrimaryModalCloseButtonIcon}
          </div>
          <p className="font-IranYekan800 text-[24px] leading-[32px]">
            {title}
          </p>
          {isBackButton ? (
            <div className="p-[2px] rounded-[4px] hover:bg-Gray-Secondary cursor-pointer">
              {ModalArrowLeftButtonIcon}
            </div>
          ) : (
            <div className="w-m h-m"></div>
          )}
        </header>
        {children}
      </div>
    </div>
  );
};

export default Modal;
