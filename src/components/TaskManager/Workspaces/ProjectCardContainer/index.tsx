// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCard from "../ProjectCard";
import NewProjectCard from "../NewProjectCard";

// <======== Intefaces ========> //
import { Workspaces } from "../../../../interfaces";

// <======== Hooks ========> //

interface IProjectCardContainer {
  workspace: Workspaces;
}

const ProjectCardContainer = ({ workspace }: IProjectCardContainer) => {
  return (
    <>
      <header className="font-IranYekan800 text-[24px] text-Gray-Darker">
        {workspace.title}
      </header>
      <main className="flex gap-l items-start">
        {workspace.projects?.length ? (
          workspace.projects?.map((item) => (
            <ProjectCard project={item} workspaceColor={workspace.color} />
          ))
        ) : (
          <NewProjectCard workspaceColor={workspace.color} />
        )}
      </main>
    </>
  );
};

export default ProjectCardContainer;
