// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectMoreButton from "./MoreButton";

// <======== Interfaces ========> //
import { Projects } from "../../../../../../interfaces/TaskManager/index";

// <======== Hooks ========> //
import { useState } from "react";

interface IProjectElementProps {
  project: Projects;
  id: number;
}

const ProjectElement: React.FC<IProjectElementProps> = ({
  project,
  id,
}): JSX.Element => {
  const [moreButton, setMoreButton] = useState(<></>);

  const handleMouseOver = () => {
    setMoreButton(
      <>
        <ProjectMoreButton workSpaceId={id} id={Number(project.id)} />
      </>
    );
  };
  const handleMouseOut = () => {
    setMoreButton(<></>);
  };
  return (
    <dd
      key={project.id}
      className="w-[246px] mr-[28px] p-[4px] rounded-[4px] flex items-center hover:bg-[#e5e7ea] cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className="ml-auto font-IranYekan500 text-BodyM cursor-pointer">
        {project.name}
      </p>
      {moreButton}
    </dd>
  );
};

export default ProjectElement;
