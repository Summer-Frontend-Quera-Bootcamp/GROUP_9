// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import WorkspaceElement from "./SpaceElement";
import ProjectElement from "./ProjectElement";

// <======== Interfaces ========> //
import { Workspaces } from "../../../../../interfaces";

// <======== Constants ========> //

// <======== Hooks ========> //

interface ISpacesAndProjectsListProps {
  SpacesList: Workspaces[];
}

const SpacesAndProjectsList: React.FC<ISpacesAndProjectsListProps> = ({
  SpacesList,
}): JSX.Element => {
  return (
    <dl className="h-full flex flex-col gap-s overflow-scroll">
      {SpacesList?.map((space) => {
        return (
          <>
            <WorkspaceElement workspace={space}/>
            {space.projects?.length ? (
                space.projects?.map((project) => {
                    return (
                        <ProjectElement project={project}/>
                    )
                })
            ) : (
                <button className="w-full min-h-[36px] border-[2px] border-Brand-Primary rounded-[8px] font-IranYekan400 text-BodyS text-Brand-Primary flex justify-center items-center hover:bg-Brand-Primary hover:text-White">
                  ساختن پروژه جدید
                </button>
            )}
          </>
        );
      })}
    </dl>
  );
};

export default SpacesAndProjectsList;
