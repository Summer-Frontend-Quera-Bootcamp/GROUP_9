//import React from "react";

import ProjectCardContainer from "../../../components/ProjectCardContainer";

const WorkSpace = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-[340px] h-[1024px] border border-solid">
        side bar here...
      </div>
      <div className="w-[1100px] pt-[64px] pr-l">
        <ProjectCardContainer />
        <ProjectCardContainer />
        <ProjectCardContainer />
      </div>
    </div>
  );
};

export default WorkSpace;
