// <======== Assest-Import ========> //
import { ChangeNameIcon } from "../../../../../../../../assets/Icons/CommonIcon/ChangeName";
import { CopyLinkButtonIcon } from "../../../../../../../../assets/Icons/CommonIcon/CopyLinkIcon";
import { RedRemoveButtonIcon } from "../../../../../../../../assets/Icons/CommonIcon/RedRemoveButton";
import { ChangeColorSpaceIcon } from "../../../../../../../../assets/Icons/TaskManager/Layout/Sidebar/Spaces/ChangeColorSpace";
import { WhiteShareButtonIcon } from "../../../../../../../../assets/Icons/TaskManager/Layout/Sidebar/Spaces/WhiteShareButton";
import { ColumnPlusButtonIcon } from "../../../../../../../../assets/Icons/TaskManager/Pages/BoardView/ColumnPlusButton";

// <======== Component-Import ========> //

// <======== Hooks ========> //


const WorkspaceMoreModal = () => {
  return (
    <div className="absolute left-[0px] w-[210px] p-[12px] rounded-[8px] shadow-moreModal bg-White flex flex-col gap-s items-start z-20">
      <div className="w-full flex flex-col gap-xs items-start">
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {ColumnPlusButtonIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            ساختن پروژه جدید
          </p>
        </div>
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {ChangeNameIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            ویرایش نام ورک‌اسپیس
          </p>
        </div>
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {ChangeColorSpaceIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            ویرایش رنگ
          </p>
        </div>
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {CopyLinkButtonIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            کپی لینک
          </p>
        </div>
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#FFE3E3] cursor-pointer">
          {RedRemoveButtonIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS text-Red-Primary cursor-pointer">
            حذف
          </p>
        </div>
      </div>
      <button className="w-full px-[12px] py-[6px] rounded-[6px] bg-Brand-Primary flex gap-[4px] justify-start items-center hover:bg-[#25a2a3]">
        {WhiteShareButtonIcon}
        <p className="font-IranYekan400 text-BodyXS text-White cursor-pointer">
          اشتراک‌گذاری
        </p>
      </button>
    </div>
  );
};

export default WorkspaceMoreModal;
