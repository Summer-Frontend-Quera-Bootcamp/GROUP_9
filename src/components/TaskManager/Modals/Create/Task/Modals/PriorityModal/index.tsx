//import { useState } from "react";

import { ClosePriorityModalIcon } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/PriorityModal/ClosePriorityModal";
import { PriorityIconCyan, PriorityIconLime, PriorityIconRed, PriorityIconYellow } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/PriorityModal/PriorityIcon";


interface IpriorityModal {
  show?: boolean;
}
const PriorityModal = ({ show = false }: IpriorityModal) => {
  return show ? (
    <div className="absolute bottom-[50%] right-[-53.5px] p-xs rounded-[8px] shadow-moreModal bg-White flex flex-col gap-s z-50">
      <div className="w-full flex flex-col gap-xs">
        <button className="w-[142px] font-IranYekan400 text-[14px] flex gap-xs items-center">
          {PriorityIconRed}
          فوری
        </button>
        <button className="w-[142px] font-IranYekan400 text-[14px] flex gap-xs items-center">
          {PriorityIconYellow}
          بالا
        </button>
        <button className="w-[142px] font-IranYekan400 text-[14px] flex gap-xs items-center">
          {PriorityIconCyan}
          متوسط
        </button>
        <button className="w-[142px] font-IranYekan400 text-[14px] flex gap-xs items-center">
          {PriorityIconLime}
          پایین
        </button>
      </div>
      <button className="w-[142px] font-IranYekan400 text-[14px] flex gap-xs items-center">
        {ClosePriorityModalIcon}
        حذف اولویت
      </button>
    </div>
  ) : null;
};

export default PriorityModal;
