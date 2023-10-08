//import React from "react";

import ProjectCardContainer from "./ProjectCardContainer";
//import { IProjectCardContainer } from "../../../components/ProjectCardContainer";
import { Workspaces } from "../../../interfaces";
interface IWorkSpace {
  WorkSpace: Workspaces[];
}
// export interface IWorkSpace {
//   feed: IProjectCardContainerFeed[];
// }
// interface IProjectCardContainerFeed {
//   projectCardHeadingFeed: string;
//   ProjectsFeed?: string[];
//   groupColorFeed:
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
const WorkSpace = ({ WorkSpace }: IWorkSpace) => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-[340px] h-[1024px]"></div>
      <div className="w-[1100px] pt-[64px] pr-l">
        {WorkSpace.map((item, index) =>
          !(index + 1 === WorkSpace.length) ? (
            <div className="mb-l pb-l border-b-2 border-Gray-Secondary">
              <ProjectCardContainer ProjectCardContainer={item} />
            </div>
          ) : (
            <div className="mb-l pb-l">
              <ProjectCardContainer ProjectCardContainer={item} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WorkSpace;
