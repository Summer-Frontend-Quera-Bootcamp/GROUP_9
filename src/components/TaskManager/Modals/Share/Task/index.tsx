//import React from "react";

import { SecondaryModalCloseButtonIcon } from "../../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton";

const ShareTask = () => {
  return (
    <div className="w-fit h-fit mx-auto p-s rounded-[12px] border-2">
      <div className="w-[430px] h-fit mb-xl flex justify-between items-center border-2">
        <div> {SecondaryModalCloseButtonIcon}</div>
        <div className="text-Black text-[20px] font-IranYekan500">
          به اشتراک گذاری تسک
        </div>
        <div> {SecondaryModalCloseButtonIcon}</div>
      </div>
      <div className="w-full h-xl mb-m font-IranYekan400 text-[14px] flex justify-center items-center">
        <input
          className="w-full h-full rounded-r-[8px] px-[11px] text-[#A6A7A7] bg-[#F0F1F3]"
          type="text"
          placeholder="دعوت با ایمیل"
        />
        <button className="w-[91px] h-full px-[30px] text-White bg-Brand-Primary rounded-l-[8px]">
          ارسال
        </button>
      </div>
    </div>
  );
};

export default ShareTask;
