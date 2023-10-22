import React from "react";
import Modal from "../../CommonModal";
import { ColorList } from "../../../../../constants/ColorList";

const NewSpaceModal: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand");
  return (
    <Modal title="ساختن ورک‌اسپیس جدید" visibility="invisible">
      <main className="w-full">
        <button
          className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
        >
            ادامه
        </button>
      </main>
    </Modal>
  );
};
export default NewSpaceModal;
