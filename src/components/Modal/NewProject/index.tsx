import { useState } from "react";
import AvatarDotted from "./AvatarDotted";
import Button from "../../common/button";
import PriorityModal from "./PriorityModal";
import TagModal from "./TagModal";

const NewProject = () => {
  const [priorityShow, setPriorityShow] = useState(false);
  const [tagShow, setTagShow] = useState(false);
  return (
    <div className="w-[1153px] h-auto p-l m-auto shadow-NewProjectModal rounded-[20px]">
      <div className="w-full h-auto mb-xl flex justify-between items-cente">
        <div className="flex">
          <img
            className="ml-[13px]"
            src="src\assets\Icon\Rectangle 19.svg"
            alt="rectangle"
          />
          <div className="text-[24px] text-Black font-IranYekan500">
            عنوان تسک
          </div>
        </div>
        <div className="hover:cursor-pointer">
          <img src="src\assets\Icon\X(32x32).svg" alt="X" />
        </div>
      </div>
      <div className="gap-xs text-Black text-[16px] font-IranYekan500 w-full h-[38px] mb-xl flex justify-start items-center">
        <div>در</div>
        <div className="hover:cursor-pointer w-[158px] h-full p-[5px] px-xs border border-[#E9EBF0] rounded-[6px]">
          پروژه اول
        </div>
        <div>برای</div>
        <div className="w-[34px] h-[34px] m-[2px]">
          <AvatarDotted url="src\assets\Icon\AddUser.svg" />
        </div>
      </div>
      <textarea
        className="resize-none w-full h-[191px] mb-xl px-l py-[19px] font-IranYekan500 text-[16px] text-[#AEAEAE] border border-[#BDBDBD] rounded-[12px]"
        placeholder="توضیحاتی برای این تسک بنویسید"
      ></textarea>
      <div className="gap-xs text-Black text-[16px] font-IranYekan500 w-full h-auto mb-xl flex justify-start items-center">
        <div>افزودن پیوست</div>
        <label
          className="hover:cursor-pointer px-xs py-[4px] gap-[4px] flex border border-Brand-Primary rounded-[4px]"
          htmlFor="NewWorkSpaceFileUpload"
        >
          <img src="src\assets\Icon\BlueAttachment.svg" alt="Attach!" />
          <div>آپلود فایل</div>
        </label>
        <input
          className="hidden"
          type="file"
          name="NewWorkSpaceFileUpload"
          id="NewWorkSpaceFileUpload"
        ></input>
      </div>
      <div className=" w-full h-auto flex justify-between items-center">
        <div className="flex gap-m">
          <div
            onClick={() => setPriorityShow(!priorityShow)}
            className="w-[50px] h-[50px]"
          >
            <AvatarDotted url="src\assets\Icon\NewTaskFlag.svg" />
          </div>
          <div className="w-[50px] h-[50px]">
            <AvatarDotted url="src\assets\Icon\NewTaskCalender.svg" />
          </div>
          <div
            onClick={() => setTagShow(!tagShow)}
            className="w-[50px] h-[50px]"
          >
            <AvatarDotted url="src\assets\Icon\NewTaskBookmark.svg" />
          </div>
        </div>
        <Button ClassName="w-[125px] h-l bg-Brand-Primary font-IranYekan400 text-[12px] text-White py-[7px] rounded-[4px]">
          ساختن تسک
        </Button>
      </div>
      <PriorityModal show={priorityShow} />
      <TagModal show={tagShow} />
    </div>
  );
};

export default NewProject;
