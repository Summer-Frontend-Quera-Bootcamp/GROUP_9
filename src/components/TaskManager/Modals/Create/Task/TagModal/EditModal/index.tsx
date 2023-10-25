//import React from 'react'
import MiniModal from "../../MiniModal";
import NewTagOptions from "../NewTagOptions";
const EditModal = () => {
  return (
    <MiniModal>
      <NewTagOptions title="delete" text="حذف" />
      <NewTagOptions title="editTag" text="ویرایش تگ" />
      <NewTagOptions title="editColor" text="ویرایش رنگ" />
    </MiniModal>
  );
};

export default EditModal;
