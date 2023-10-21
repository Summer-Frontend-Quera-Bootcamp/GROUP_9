// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectMoreButton from "./MoreButton";

// <======== Interfaces ========> //
import { Projects } from "../../../../../../interfaces";

// <======== Hooks ========> //
import { useState } from "react";


interface IProjectElementProps {
  project: Projects;
}

const ProjectElement: React.FC<IProjectElementProps> = ({
  project,
}): JSX.Element => {
  const [moreButton, setMoreButton] = useState(<></>);

  const handleMouseOver = () => {
    setMoreButton(
      <>
        <ProjectMoreButton />
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
        {project.title}
      </p>
      {moreButton}
    </dd>
  );
};

export default ProjectElement;
