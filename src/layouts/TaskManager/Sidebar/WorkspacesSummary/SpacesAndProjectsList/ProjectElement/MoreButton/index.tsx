// <======== Assest-Import ========> //
import { MoreButtonIcon } from "../../../../../../../assets/Icons/CommonIcon/MoreButton";

// <======== Component-Import ========> //
import ProjectMoreModal from "./Modal";

// <======== Hooks ========> //
import { useState } from "react";


const ProjectMoreButton = () => {
  const [content, setContent] = useState(<>{MoreButtonIcon}</>);

  const handleMouseOver = () => {
    setContent(
      <>
        {MoreButtonIcon}
        <ProjectMoreModal />
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

export default ProjectMoreButton;
