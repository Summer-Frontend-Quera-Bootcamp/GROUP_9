// import { useState } from "react";

import { AddMemberIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Common/AddMember";
import { CalenderComponentIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Create/CalenderModal/CalenderIcon";
import { PriorityIcon } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Create/PriorityModal/PriorityIcon";
import { TagIconXL } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Create/TagModal/TagIcon";
import { TagIconXS } from "../../../../../../assets/Icons/TaskManager/Modals/Task/Common/TagIcon";
interface IAvatarDotted {
  iconName: "priority" | "tagSmall" | "user" | "calender" | "tag";
}

const AvatarDotted = ({ iconName }: IAvatarDotted) => {
  return (
    <div className="w-full h-full cursor-pointer flex justify-center items-center border border-[#C1C1C1] border-dashed rounded-full ">
      {iconName === "priority" ? PriorityIcon : null}
      {iconName === "user" ? AddMemberIcon : null}
      {iconName === "calender" ? CalenderComponentIcon : null}
      {iconName === "tag" ? TagIconXL : null}
      {iconName === "tagSmall" ? TagIconXS : null}
    </div>
  );
};

export default AvatarDotted;
