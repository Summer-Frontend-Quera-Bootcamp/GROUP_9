//import React from "react";
import NewProjectCard from "../NewProjectCard";
import ProjectCard from "../ProjectCard";
interface IProjectCardContainer {
  projectCardHeading: string;
  Projects: string[] | undefined;
  groupColor:
    | "Cyan"
    | "Red"
    | "Teal"
    | "Pink"
    | "Brand"
    | "Grape"
    | "Green"
    | "Violet"
    | "Lime"
    | "Indigo"
    | "Yellow"
    | "Blue"
    | "Orange";
}
const ProjectCardContainer = ({
  projectCardHeading,
  Projects,
  groupColor,
}: IProjectCardContainer) => {
  return (
    <div className="w-full h-[144px] flex flex-col justify-between items-start ">
      <div>
        <p className="font-IranYekan800 text-[24px] text-Gray-Darker">
          {projectCardHeading}
        </p>
      </div>
      {Projects ? (
        <div className="flex gap-l">
          {Projects.map((item) => (
            <ProjectCard projectName={item} projectColor={groupColor} />
          ))}
        </div>
      ) : (
        <div>
          <NewProjectCard newProjectColor={groupColor} />
        </div>
      )}
    </div>
  );
};

export default ProjectCardContainer;
