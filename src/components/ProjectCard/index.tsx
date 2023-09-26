//import React from "react";
import { WorkSpaceList } from "../../api/SpacesAndProjectsData";
interface IProjectCard {
  ProjectCard: WorkSpaceList;
  ProjectName: string;
}
// interface IProjectCard {
//   projectName: string;
//   projectColor:
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
const ProjectCard = ({ ProjectCard, ProjectName }: IProjectCard) => {
  return (
    <>
      {ProjectCard.color === "Cyan" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#15AABF] to-[#15AABF80] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Red" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#FA5252] to-[#FA525280] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Teal" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#12B886] to-[#12B88680] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Pink" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#E64980] to-[#E6498080] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Brand" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#208D8E] to-[#208D8E80] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Grape" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#BE4BDB] to-[#BE4BDB80] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Green" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#40C057] to-[#40C05780] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Violet" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#7950F2] to-[#7950F280] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Lime" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#82C91E] to-[#82C91E80] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Indigo" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#4C6EF5] to-[#4C6EF580] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Yellow" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#FAB005] to-[#FAB00580] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Blue" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#228BE6] to-[#228BE680] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
      {ProjectCard.color === "Orange" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#FD7E14] to-[#FD7E1480] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3  rounded-[16px] ">
          <div className="font-IranYekan800 text-BoldM text-White">
            {ProjectName}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
