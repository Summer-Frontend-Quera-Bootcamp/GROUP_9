//import React from "react";
import MiniModal from "../MiniModal";
import MiniModalSearch from "./MiniModalSearch";
interface ITagModal {
  show?: boolean;
}
const TagModal = ({ show = false }: ITagModal) => {
  return show ? (
    <MiniModal>
      <MiniModalSearch
        MiniModalSearchArray={[
          {
            TagFrame: { title: "درس", color: "Blue" },
          },
          {
            TagFrame: { title: "کار", color: "Grape" },
          },
          {
            TagFrame: { title: "پروژه", color: "Cyan" },
          },
        ]}
      />
    </MiniModal>
  ) : null;
};

export default TagModal;
