// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import WorkspaceElement from "./SpaceElement";
import ProjectElement from "./ProjectElement";

// <======== Interfaces ========> //
import { Workspaces } from "../../../../../interfaces";
import {
  InitialState,
  editworkspace,
  fetchworkspace,
} from "../../../../../services/features/workspace/workspaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchprojects,
  newproject,
} from "../../../../../services/features/workspace/projectsSlice";

// <======== Constants ========> //

// <======== Hooks ========> //

interface ISpacesAndProjectsListProps {
  SpacesList: InitialState[];
}

const SpacesAndProjectsList: React.FC<ISpacesAndProjectsListProps> = ({
  SpacesList,
}): JSX.Element => {
  return (
    <dl className="h-full flex flex-col gap-s overflow-scroll">
      {SpacesList?.map((space) => {
        return (
          <>
            <WorkspaceElement workspace={space} />
            {/* {projects?.length ? (

                projects?.map((project) => {
                    return (
                        <ProjectElement project={project}/>
                    )
                })
            ) : (
                <button className="w-full min-h-[36px] border-[2px] border-Brand-Primary rounded-[8px] font-IranYekan400 text-BodyS text-Brand-Primary flex justify-center items-center hover:bg-Brand-Primary hover:text-White">
                  ساختن پروژه جدید
                </button>
            )} */}
          </>
        );
      })}
    </dl>
  );
};

export default SpacesAndProjectsList;
