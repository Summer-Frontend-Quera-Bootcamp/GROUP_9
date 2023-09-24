//import React from "react";
interface IProjectCard {
  projectName: string;
}
const ProjectCard = ({ projectName }: IProjectCard) => {
  return (
    <div className="shadow-projectCart bg-gradient-to-l from-[#40C057] to-[#40C05780] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
      <div className="font-IranYekan800 text-BoldM text-White">
        {projectName}
      </div>
    </div>
  );
};

export default ProjectCard;
