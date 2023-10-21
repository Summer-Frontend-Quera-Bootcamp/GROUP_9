import React from "react";
import Modal from "../../CommonModal";
import { ColorList } from "../../../../../constants/ColorList";

const NewProjectModal: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand")
  return (
    <Modal title="ساختن پروژه جدید" visibility="invisible">
      <main className="w-full">
        {/* <Input type="text" name="projectName" label="نام پروژه" /> */}
        <button
          className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
        >
          ساختن پروژه
        </button>
      </main>
    </Modal>
  );
};
export default NewProjectModal;
