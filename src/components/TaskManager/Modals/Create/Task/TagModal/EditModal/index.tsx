//import React from 'react'
import NewTagOptions from "../NewTagOptions";
const EditModal = () => {
  return (
    <>
      <NewTagOptions title="delete" text="حذف" />
      <NewTagOptions title="editTag" text="ویرایش تگ" />
      <NewTagOptions title="editColor" text="ویرایش رنگ" />
    </>
  );
};

export default EditModal;
