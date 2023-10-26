// <======== Assest-Import ========> //
import { MoreButtonIcon } from "../../../../../../../assets/Icons/CommonIcon/MoreButton";
import { Projects } from "../../../../../../../interfaces/TaskManager";

// <======== Component-Import ========> //
import ProjectMoreModal from "./Modal";

// <======== Hooks ========> //
import { useState } from "react";

interface Props {
  id: number;
  workSpaceId: number;
}
const ProjectMoreButton = ({ id, workSpaceId }: Props) => {
  const [content, setContent] = useState(<>{MoreButtonIcon}</>);

  const handleMouseOver = () => {
    setContent(
      <>
        {MoreButtonIcon}
        <ProjectMoreModal workSpaceId={workSpaceId} id={id} />
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
