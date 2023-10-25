import React from "react";
interface MiniModal extends React.PropsWithChildren {}
const MiniModal = ({ children }: MiniModal) => {
  return (
    <div className="fixed top-[50%] left-[50%] bg-White w-fit h-fit flex flex-col gap-xs p-xs rounded-[8px] mx-auto shadow-MiniModal">
      {children}
    </div>
  );
};

export default MiniModal;