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
            TagFrame: { content: "درس", color: "Blue" },
          },
          {
            TagFrame: { content: "کار", color: "Grape" },
          },
          {
            TagFrame: { content: "پروژه", color: "Cyan" },
          },
        ]}
      />
    </MiniModal>
  ) : null;
};

export default TagModal;
