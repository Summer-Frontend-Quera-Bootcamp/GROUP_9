// import { useState } from "react";

import { AddMemberIcon } from "../../Common/AddMember";
import { CalendeComponentrIcon } from "../../Create/CalenderModal/CalenderIcon";
import { PriorityIcon } from "../../Create/PriorityModal/PriorityIcon";
import { TagIconXL } from "../../Create/TagModal/TagIcon";
import { TagIconXS } from "../../Common/TagIcon";
interface IAvatarDotted {
  iconName: "priority" | "tagSmall" | "user" | "calender" | "tag";
}

const AvatarDotted = ({ iconName }: IAvatarDotted) => {
  return (
    <div className="w-full h-full cursor-pointer flex justify-center items-center border border-[#C1C1C1] border-dashed rounded-full ">
      {iconName === "priority" ? PriorityIcon : null}
      {iconName === "user" ? AddMemberIcon : null}
      {iconName === "calender" ? CalendeComponentrIcon : null}
      {iconName === "tag" ? TagIconXL : null}
      {iconName === "tagSmall" ? TagIconXS : null}
    </div>
  );
};

export default AvatarDotted;
