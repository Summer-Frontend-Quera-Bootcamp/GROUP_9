// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCard from "../ProjectCard";
import NewProjectCard from "../NewProjectCard";

// <======== Intefaces ========> //
import { Workspaces } from "../../../../interfaces/TaskManager";

// <======== Hooks ========> //
import { useAppDispatch } from "../../../../services/app/hooks";
import { useEffect, useState } from "react";
import { fetchprojects } from "../../../../services/features/workspace/projectsSlice";

interface IProjectCardContainer {
  workspace: Workspaces;
}

const ProjectCardContainer = ({ workspace }: IProjectCardContainer) => {
  const dispatch = useAppDispatch();
  const [projects, setProjects] = useState<any>([]);
  useEffect(() => {
    dispatch(fetchprojects(workspace.id)).then((e) => setProjects(e.payload));
  }, []);
  return (
    <>
      <header className="font-IranYekan800 text-[24px] text-Gray-Darker">
        {workspace.name}
      </header>
      <main className="flex gap-l items-start">
        {projects?.length ? (
          projects?.map((item: any) => {
            return (
              <ProjectCard
                key={item.name}
                project={item}
                workspaceColor={String(workspace.color)}
              />
            );
          })
        ) : (
          <NewProjectCard
            workSpaceId={Number(workspace.id)}
            workspaceColor={String(workspace.color)}
          />
        )}
      </main>
    </>
  );
};

export default ProjectCardContainer;
