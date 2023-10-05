//import React from 'react'
import MiniModal from "../../MiniModal";
import NewTagOptions from "../NewTagOptions";
const EditModal = () => {
  return (
    <MiniModal>
      <NewTagOptions url="src\assets\Icon\NewTagOptionsX.svg" text="حذف" />
      <NewTagOptions
        url="src\assets\Icon\NewTagOptionsEdit.svg"
        text="ویرایش تگ"
      />
      <NewTagOptions
        url="src\assets\Icon\NewTagOptionsPalette.svg"
        text="ویرایش رنگ"
      />
    </MiniModal>
  );
};

export default EditModal;
