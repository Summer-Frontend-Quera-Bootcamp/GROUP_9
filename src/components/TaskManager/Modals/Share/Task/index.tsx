//import React from "react";

import { SecondaryModalCloseButtonIcon } from "../../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton";
import { LinkIcon } from "../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/LinkIcon";
import GrayBorderButton from "./GrayBorderButton";
import People from "./People";

const ShareTask = () => {
  return (
    <div className="w-fit h-fit mx-auto p-s rounded-[12px] border-2">
      <div className="w-[430px] h-fit mb-xl flex justify-between items-center ">
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
      <div className="h-[26px] mb-m flex justify-between items-center">
        <div className="w-fit flex justify-center items-center gap-xs">
          <div>{LinkIcon}</div>
          <div className="font-IranYekan400 text-Black text-[14px]">
            لینک خصوصی
          </div>
        </div>
        <GrayBorderButton padding="12px">
          <div>کپی لینک</div>
        </GrayBorderButton>
      </div>
      <div className="mb-s font-IranYekan400 text-[14px] text-[#7D828C]">
        اشتراک گذاشته شده با
      </div>
      <div className="flex flex-col gap-xs">
        <People owner={true} email="sararahimi@gmail.com" />
        <People owner={false} email="sararahimi@gmail.com" />
      </div>
    </div>
  );
};

export default ShareTask;
