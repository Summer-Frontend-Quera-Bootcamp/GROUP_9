//import React from "react";
import NewProjectCard from "../NewProjectCard";
import ProjectCard from "../ProjectCard";
import { WorkSpaceList } from "../../api/SpacesAndProjectsData";
//import { IProjectCard } from "../ProjectCard";
interface IProjectCardContainer {
  ProjectCardContainer: WorkSpaceList;
}
// interface IProjectCardContainer {
//   projectCardHeading: string;
//   Projects: string[] | undefined;
//   groupColor:
//     | "Cyan"
//     | "Red"
//     | "Teal"
//     | "Pink"
//     | "Brand"
//     | "Grape"
//     | "Green"
//     | "Violet"
//     | "Lime"
//     | "Indigo"
//     | "Yellow"
//     | "Blue"
//     | "Orange";
// }
const ProjectCardContainer = ({
  ProjectCardContainer,
}: IProjectCardContainer) => {
  return (
    <div className="w-full h-[144px] flex flex-col justify-between items-start ">
      <div>
        <p className="font-IranYekan800 text-[24px] text-Gray-Darker">
          {ProjectCardContainer.workSpacename}
        </p>
      </div>
      {ProjectCardContainer.projectList ? (
        <div className="flex gap-l">
          {ProjectCardContainer.projectList.map((item) => (
            <ProjectCard
              ProjectCard={ProjectCardContainer}
              ProjectName={item.projectName}
            />
          ))}
        </div>
      ) : (
        <div>
          <NewProjectCard NewProjectCard={ProjectCardContainer} />
        </div>
      )}
    </div>
  );
};

export default ProjectCardContainer;
