import React from "react";

interface IGrayBorderButton extends React.PropsWithChildren {
  padding: string;
}

const GrayBorderButton = ({ padding, children }: IGrayBorderButton) => {
  return (
    <div
      style={{ paddingLeft: `${padding}`, paddingRight: `${padding}` }}
      className="w-fit max-h-[30px] h-full flex justify-center items-center gap-[10px] font-IranYekan400 text-[12px] text-Black border border-[#E9EBF0] rounded-[6px]"
    >
      {children}
    </div>
  );
};

export default GrayBorderButton;
