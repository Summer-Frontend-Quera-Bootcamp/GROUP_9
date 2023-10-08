//import React from 'react'

import { ClosePriorityModalIcon } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/PriorityModal/ClosePriorityModal";

const PriorityDeleteButton = () => {
  return (
    <div className="w-[142px] h-fit mt-[4px] cursor-pointer flex justify-start items-center gap-xs ">
      <div>{ClosePriorityModalIcon}</div>
      <div className="font-IranYekan400 text-[14px] text-[#534D60]">
        حذف اولویت
      </div>
    </div>
  );
};

export default PriorityDeleteButton;
