import { useDispatch } from "react-redux";
import {
  PriorityIconCyan,
  PriorityIconGray,
  PriorityIconRed,
  PriorityIconYellow,
} from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/PriorityModal/PriorityIcon";
import { setpriority } from "../../../../../../../services/features/workspace/taskmodalSlice";

//import React from "react";
interface IPriorityOption {
  color: "red" | "yellow" | "cyan" | "gray";
  text: string;
}
const PriorityOption = ({ color, text }: IPriorityOption) => {
  const dispatch = useDispatch()


  return (
    <div className="cursor-pointer flex w-[142px] gap-xs font-IranYekan400 text-Black text-[14px]">
      {color === "red" && <div onClick={()=>dispatch(setpriority(1))} >{PriorityIconRed}</div>}
      {color === "yellow" && <div onClick={()=>dispatch(setpriority(2))} >{PriorityIconYellow}</div>}
      {color === "cyan" && <div onClick={()=>dispatch(setpriority(3))} >{PriorityIconCyan}</div>}
      {color === "gray" && <div onClick={()=>dispatch(setpriority(4))} >{PriorityIconGray}</div>}
      <div>{text}</div>
    </div>
  );
};

export default PriorityOption;
