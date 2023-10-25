import { RemoveTag } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/TagModal/RemoveTag";
import { TagColorEditIcon } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/TagModal/TagColorEdit";
import { TagNameEditIcon } from "../../../../../../../assets/Icons/TaskManager/Modals/Task/Create/TagModal/TagNameEdit";

//import React from 'react'
interface INewTagOptions {
  title: "delete" | "editTag" | "editColor";
  text: string;
}
const NewTagOptions = ({ title, text }: INewTagOptions) => {
  return (
    <div className="cursor-pointer flex gap-[4px] items-center font-IranYekan400 text-Black text-[12px]">
      {title === "delete" && <div>{RemoveTag}</div>}
      {title === "editTag" && <div>{TagNameEditIcon}</div>}
      {title === "editColor" && <div>{TagColorEditIcon}</div>}
      <div>{text}</div>
    </div>
  );
};

export default NewTagOptions;
