//import React from "react";
import ProjectCard from "../ProjectCard";
// interface IProjectCardContainer{
//     projects: string[];
// }
const ProjectCardContainer = () => {
  return (
    <div className="w-full h-[144px] flex flex-col justify-between items-start border-2 border-solid ">
      <div>
        <p className="font-IranYekan800 text-[24px] text-Gray-Darker">
          درس مدیریت پروژه
        </p>
      </div>
      <div className="flex gap-l">
        <ProjectCard projectName="پروژه ی اول" />
        <ProjectCard projectName="پروژه ی دوم" />
        <ProjectCard projectName="پروژه ی سوم" />
      </div>
    </div>
  );
};

export default ProjectCardContainer;
