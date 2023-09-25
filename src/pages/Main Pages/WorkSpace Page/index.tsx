//import React from "react";

import ProjectCardContainer from "../../../components/ProjectCardContainer";
//import { IProjectCardContainer } from "../../../components/ProjectCardContainer";
export interface IWorkSpace {
  feed: IProjectCardContainerFeed[];
}
interface IProjectCardContainerFeed {
  projectCardHeadingFeed: string;
  ProjectsFeed?: string[];
  groupColorFeed:
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
const WorkSpace = ({ feed }: IWorkSpace) => {
  return (
    <div className="w-full h-full flex ">
      <div className="w-[340px] h-[1024px]"></div>
      <div className="w-[1100px] pt-[64px] pr-l">
        {feed.map(
          ({ projectCardHeadingFeed, ProjectsFeed, groupColorFeed }, index) =>
            !(index + 1 === feed.length) ? (
              <div className="mb-l pb-l border-b-2 border-Gray-Secondary">
                <ProjectCardContainer
                  projectCardHeading={projectCardHeadingFeed}
                  Projects={ProjectsFeed}
                  groupColor={groupColorFeed}
                />
              </div>
            ) : (
              <div className="mb-l pb-l">
                <ProjectCardContainer
                  projectCardHeading={projectCardHeadingFeed}
                  Projects={ProjectsFeed}
                  groupColor={groupColorFeed}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default WorkSpace;
