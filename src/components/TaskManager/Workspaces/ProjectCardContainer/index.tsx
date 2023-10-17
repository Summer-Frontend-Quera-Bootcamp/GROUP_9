import { Workspaces } from "../../../../interfaces";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCard from "../ProjectCard";
import NewProjectCard from "../NewProjectCard";

// <======== Hooks ========> //


interface IProjectCardContainer {
  workspace: Workspaces;
}

const ProjectCardContainer = ({
    workspace,
}: IProjectCardContainer) => {
  return (
    <div className="w-full h-[144px] flex flex-col justify-between items-start overflow-x-hidden">
      <div>
        <p className="font-IranYekan800 text-[24px] text-Gray-Darker">
          {workspace.title}
        </p>
      </div>
      {workspace.projects?.length ? (
        <div className="width-full flex gap-l overflow-x-scroll">
          {workspace.projects?.map((item) => (
            <ProjectCard project={item} workspaceColor={workspace.color}/>
          ))}
        </div>
      ) : (
        <div>
          <NewProjectCard workspaceColor={workspace.color} />
        </div>
      )}
    </div>
  );
};

export default ProjectCardContainer;