//import React from 'react'

import { SecondaryModalCloseButtonIcon } from "../../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton";
import { AddAttachmentIcon } from "../../../../../assets/Icons/TaskManager/Modals/Task/Information/AddAttachment";
import { TaskModalShareButtonIcon } from "../../../../../assets/Icons/TaskManager/Modals/Task/Information/TaskModalShareButton";
import AvatarDotted from "./AvatarDotted";
import CommentModal from "./CommentModal/CommentModal";

const TaskInformation = () => {
  return (
    <div className=" w-[1352px] h-[596px] mx-auto flex flex-col justify-end rounded-[20px] border-2">
      <div className="fixed mb-[539px] mr-[1292px]">
        {SecondaryModalCloseButtonIcon}
      </div>
      <div className=" w-[1316px] h-[506px] flex mr-[36px]">
        <div className="w-full">
          <div className="pb-m border-b border-b-[#F4F4F4]">
            <div className=" h-[57px] flex items-center justify-between px-s">
              <div className="flex items-center gap-s">
                <button className="w-[111px] h-[30px] bg-[#F84747] font-IranYekan400 text-[12px] text-White text-center rounded-[4px]">
                  Open
                </button>
                <div className="flex overflow-scroll w-[60px] ">
                  <div className="absolute w-[34px] h-[37px]">
                    <img
                      className="w-full h-full rounded-full"
                      src="src\assets\Images\sampleProfilePicture.png"
                      alt="profile"
                    />
                  </div>
                  <div className="w-[34px] h-[34px] mr-auto">
                    <AvatarDotted iconName="user" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[5px] font-IranYekan500 text-Black text-[16px]">
                {TaskModalShareButtonIcon}اشتراک گذاری
              </div>
            </div>
          </div>
          <div className="mt-m px-[20px]">
            <div className="w-[34px] h-[34px]">
              <AvatarDotted iconName="tagSmall" />
            </div>
            <div className="font-IranYekan800 mb-xs text-Black text-[24px]">
              عنوان تسک
            </div>
            <div className="p-[12px] mb-m font-IranYekan500 text-[16px] text-Black border border-[#C1C1C1] rounded-[12px] ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </div>
            <div className="flex gap-[4px] items-center font-IranYekan400 text-[12px] text-Brand-Primary">
              {AddAttachmentIcon} افزودن پیوست
            </div>
          </div>
        </div>
        {/* vertical border */}
        <div className=" h-full border border-[#F4F4F4]"></div>
        <div className="w-[659px] min-w-[659px] h-[506px] flex flex-col justify-between">
          <div className="pb-m border-b border-b-[#F4F4F4]">
            <div className=" h-[57px] flex items-center justify-start px-[20px]">
              <div className="pl-m border-l border-l-[#F4F4F4]">
                <div className="mb-xs font-IranYekan400 text-[12px] text-[#BBBBBB]">
                  ساخته شده در
                </div>
                <div className="font-IranYekan500 text-Black text-[16px]">
                  ۱ اردیبهشت ۱۴۰۲
                </div>
              </div>
              <div className="pr-m">
                <div className="mb-xs font-IranYekan400 text-[12px] text-[#BBBBBB]">
                  ددلاین
                </div>
                <div className="font-IranYekan500 text-Black text-[16px]">
                  پس‌فردا
                </div>
              </div>
            </div>
          </div>
          <CommentModal />
        </div>
      </div>
    </div>
  );
};

export default TaskInformation;
