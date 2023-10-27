import { useState } from "react";
import AvatarDotted from "../../Information/Task/AvatarDotted";
import { GrayRectangle } from "../../../../../assets/Icons/TaskManager/Modals/Task/Create/Rectangle";
import { SecondaryModalCloseButtonIcon } from "../../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton";
import { UploadFileIcon } from "../../../../../assets/Icons/TaskManager/Modals/Task/Create/UploadFile";
// import { showtagmodal } from "../../../../../services/features/workspace/taskmodalSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../services/app/hooks";
import { hidefirstasktmodal } from "../../../../../services/features/workspace/taskmodalSlice";
import CalenderModal from "./Modals/CalenderModal";
import TagModal from "./Modals/TagModal";
import PriorityModal from "./Modals/PriorityModal";
import { RootState } from "../../../../../services/app/store";

const Newtaskmodal = () => {
  const display = useSelector((state: RootState) => state.taskmodal.firstmodal);
  const dispatch = useAppDispatch();
  const [priorityShow, setPriorityShow] = useState(false);
  const [tagShow, setTagShow] = useState(false);
  const [calenderShow, setCalenderShow] = useState(false);

  const pullShowModal = (showModal: boolean) => {
    setCalenderShow(showModal);
  };

  const handleclick = () => {
    dispatch(hidefirstasktmodal());
  };
  return (
    <div
      className={`fixed w-screen h-screen flex justify-center items-center ${display} z-40`}
    >
      <CalenderModal show={calenderShow} func={pullShowModal}/>
      <div className="w-[1153px] bg-White p-l rounded-[20px] shadow-taskModal flex flex-col gap-xl items-start select-none">
        <header className="w-full flex justify-between items-center">
          <div className="flex gap-[13px] items-center">
            {GrayRectangle}
            <h6 className="text-[24px] text-Black font-IranYekan500">
              عنوان تسک
            </h6>
          </div>
          <div className="hover:cursor-pointer" onClick={handleclick}>
            {SecondaryModalCloseButtonIcon}
          </div>
        </header>

        <div className="w-full h-[38px] font-IranYekan500 text-[16px] flex gap-xs justify-start items-center">
          در
          <div className="w-[158px] h-l pt-[5px] pb-[4px] px-xs border border-[#E9EBF0] rounded-[6px] cursor-pointer">
            پروژه اول
          </div>
          برای
          <div className="w-[34px] h-[34px] m-[2px]">
            <AvatarDotted iconName="user" />
          </div>
        </div>

        <textarea
          className="resize-none w-full h-[191px] px-l py-[19px] font-IranYekan500 text-[16px] border border-[#BDBDBD] rounded-[12px]"
          placeholder="توضیحاتی برای این تسک بنویسید"
        ></textarea>

        <div className="gap-xs text-Black text-[16px] font-IranYekan500 w-full h-auto flex justify-start items-center select-none">
          افزودن پیوست
          <label
            className="cursor-pointer px-xs py-[4px] gap-[4px] flex border border-Brand-Primary rounded-[4px]"
            htmlFor="NewWorkSpaceFileUpload"
          >
            <div>{UploadFileIcon}</div>
            <div>آپلود فایل</div>
          </label>
          <input
            className="hidden"
            type="file"
            name="NewWorkSpaceFileUpload"
            id="NewWorkSpaceFileUpload"
          ></input>
        </div>

        <div className="gap-xs text-Black text-[16px] font-IranYekan500 w-full h-auto flex justify-start items-center select-none">
          افزودن کاور
          <label
            className="cursor-pointer px-xs py-[4px] gap-[4px] flex border border-Brand-Primary rounded-[4px]"
            htmlFor="CoverFileUpload"
          >
            <div>{UploadFileIcon}</div>
            <div>آپلود فایل</div>
          </label>
          <input
            className="hidden"
            type="file"
            name="CoverFileUpload"
            id="CoverFileUpload"
          ></input>
        </div>

        <footer className="w-full flex justify-between items-center">
          <div className="flex gap-m">
            <div
              onClick={() => setPriorityShow(!priorityShow)}
              className="relative w-[50px] h-[50px]"
            >
              <AvatarDotted iconName="priority" />
              <PriorityModal show={priorityShow} />
            </div>
            <div
              className="w-[50px] h-[50px]"
              onClick={() => setCalenderShow(!calenderShow)}
            >
              <AvatarDotted iconName="calender" />
            </div>
            <div
              onClick={() => setTagShow(!tagShow)}
              className="relative w-[50px] h-[50px]"
            >
              <AvatarDotted iconName="tag" />
              <TagModal show={tagShow} />
            </div>
          </div>

          <button
            onClick={handleclick}
            className="w-[125px] h-l bg-Brand-Primary font-IranYekan400 text-[12px] text-White py-[7px] rounded-[4px]"
          >
            ساختن تسک
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Newtaskmodal;
