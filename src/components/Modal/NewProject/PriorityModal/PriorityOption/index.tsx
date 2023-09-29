//import React from "react";
interface IPriorityOption {
  url: string;
  text: string;
}
const PriorityOption = ({ url, text }: IPriorityOption) => {
  return (
    <div className="cursor-pointer flex w-[142px] gap-xs font-IranYekan400 text-Black text-[14px]">
      <img src={url} alt="icon" />
      <div>{text}</div>
    </div>
  );
};

export default PriorityOption;
