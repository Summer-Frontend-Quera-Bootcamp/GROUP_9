import { workspaces } from "../../../../../constants";
// <======== Assest-Import ========> //

// <======== Interface-Import ========> //
import { Workspaces } from "../../../../../interfaces";

// <======== Component-Import ========> //

// <======== Hooks ========> //


interface IWorkspacesListProps {
    SpacesList?: Array<Workspaces>;
}

const WorkspacesList: React.FC<IWorkspacesListProps> = ({SpacesList = workspaces}): JSX.Element => {
    return (
        <dl className="h-full flex flex-col gap-s overflow-scroll">
          {SpacesList?.map((space) => {
            return (
              <>
                <dt
                  key={space.id}
                  className="w-full p-[4px] rounded-[4px] flex items-center gap-xs"
                >
                  <div
                    className={`w-[20px] h-[20px] bg-${space.color} rounded-[4px]`}
                  ></div>
                  <p className="font-IranYekan500 text-BodyM">
                    {space.title}
                  </p>
                </dt>
                {space.projects?.length ? (
                  space.projects?.map((project) => {
                    return (
                      <dd
                        key={project.id}
                        className="w-[246px] mr-[28px] px-[6px] py-[4px] rounded-[4px]"
                      >
                        <p className="font-IranYekan500 text-BodyM">
                          {project.title}
                        </p>
                      </dd>
                    );
                  })
                ) : (
                  <button className="w-full min-h-[36px] border-[2px] border-Brand-Primary rounded-[8px] font-IranYekan400 text-BodyS text-Brand-Primary flex justify-center items-center">
                    ساختن پروژه جدید
                  </button>
                )}
              </>
            );
          })}
        </dl>
    )
}

export default WorkspacesList;