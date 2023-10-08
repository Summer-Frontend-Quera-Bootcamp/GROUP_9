import {
  PriorityIconCyan,
  PriorityIconGray,
  PriorityIconRed,
  PriorityIconYellow,
} from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/PriorityModal/PriorityIcon";

//import React from "react";
interface IPriorityOption {
  color: "red" | "yellow" | "cyan" | "gray";
  text: string;
}
const PriorityOption = ({ color, text }: IPriorityOption) => {
  return (
    <div className="cursor-pointer flex w-[142px] gap-xs font-IranYekan400 text-Black text-[14px]">
      {color === "red" && <div>{PriorityIconRed}</div>}
      {color === "yellow" && <div>{PriorityIconYellow}</div>}
      {color === "cyan" && <div>{PriorityIconCyan}</div>}
      {color === "gray" && <div>{PriorityIconGray}</div>}
      <div>{text}</div>
    </div>
  );
};

export default PriorityOption;
