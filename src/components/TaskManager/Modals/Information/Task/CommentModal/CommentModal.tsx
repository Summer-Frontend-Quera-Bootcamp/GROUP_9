import { useState, useRef } from "react";

import { InformationTaskCommentIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/Comment";
import { EmailIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/EmailIcon";
import { FileIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/FileIcon";
import { CommentLinkIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/LinkIcon";
import { EmojiIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/EmojiIcon";

const CommentModal = () => {
  const textBox = useRef<any>(null);
  const [textContent, setTextContent] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    setTextContent(textBox.current.value);
    console.log(textBox.current.value);
  };
  return (
    <>
      {textContent ? (
        <div className="py-m px-s flex gap-xs justify-between">
          <div className="w-[34px] h-[37px]">
            <img
              className="w-full h-full rounded-full"
              src="src\assets\Images\sampleProfilePicture.png"
              alt="profile"
            />
          </div>
          <div className="flex flex-col w-full p-s border border-[#F4F4F4] rounded-[12px]">
            <div className="mb-xs flex justify-between font-IranYekan400 text-[12px] text-[#AAAAAA]">
              <div className="flex justify-center items-center gap-[4px]">
                <div className="font-IranYekan800 text-[16px] text-Brand-Primary">
                  شما
                </div>
                <div>کامنت گذاشتید</div>
              </div>
              <div>۱۲ تیر</div>
            </div>
            <div className="font-IranYekan400 text-Black text-12px">
              {textContent}
            </div>
          </div>
        </div>
      ) : null}

      <div className="h-full flex flex-col justify-end">
        {/* <div className=""></div> */}
        {!clicked ? (
          <div
            onClick={handleClick}
            className="cursor-pointer h-[67px] pr-[15px] pl-[36px] pt-[13px] flex justify-between font-IranYekan500 text-[16px] text-[#AEAEAE] border-t border-t-[#F4F4F4]"
          >
            <div>کامنت شما</div>
            <div>{InformationTaskCommentIcon}</div>
          </div>
        ) : (
          <div className="h-[209px] shadow-commentCart rounded-t-[12px] flex flex-col justify-end">
            <div className="flex justify-between w-[599px] h-[149px] pt-[13px] pr-[16px] ">
              <div className="w-fit h-full">
                <textarea
                  className="p-xs w-[580px] h-full font-IranYekan500 text-[#AEAEAE] text-[16px] resize-none"
                  placeholder="کامنت"
                  ref={textBox}
                ></textarea>
              </div>
              <div className="w-m h-m">{InformationTaskCommentIcon}</div>
            </div>
            <div className="h-[60px] px-[20px] flex justify-between items-center">
              <div className="flex justify-between gap-[20px]">
                <div className="cursor-pointer">{EmailIcon}</div>
                <div className="cursor-pointer">{CommentLinkIcon}</div>
                <div className="cursor-pointer">{FileIcon}</div>
                <div className="cursor-pointer">{EmojiIcon}</div>
              </div>
              <div>
                <button
                  onClick={handleClick}
                  className="bg-Brand-Primary font-IranYekan800 text-[12px] text-White px-[12px] py-[6px] rounded-[6px]"
                >
                  ثبت کامنت
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentModal;
