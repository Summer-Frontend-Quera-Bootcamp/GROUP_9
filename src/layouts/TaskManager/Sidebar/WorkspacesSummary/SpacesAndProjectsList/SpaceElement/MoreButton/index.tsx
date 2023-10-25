// <======== Assest-Import ========> //
import { MoreButtonIcon } from "../../../../../../../assets/Icons/CommonIcon/MoreButton";

// <======== Component-Import ========> //
import WorkspaceMoreModal from "./Modal";

// <======== Hooks ========> //
import { useState } from "react";
interface IProps {
  id: number;
}
const SpaceMoreButton = ({ id }: IProps) => {
  const [content, setContent] = useState(<>{MoreButtonIcon}</>);

  const handleMouseOver = () => {
    setContent(
      <>
        {MoreButtonIcon}
        <WorkspaceMoreModal id={id} />
      </>
    );
  };
  const handleMouseOut = () => {
    setContent(<>{MoreButtonIcon}</>);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="more relative"
    >
      {content}
    </div>
  );
};

export default SpaceMoreButton;
