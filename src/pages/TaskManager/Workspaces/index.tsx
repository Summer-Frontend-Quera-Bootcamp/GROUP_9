import "./index.css";
import { workspaces } from "../../../constants";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCardContainer from "../../../components/TaskManager/Workspaces/ProjectCardContainer";

// <======== Hooks ========> //

const WorkspacesPage = () => {
  return (
    <div className="WHWorkspaces fixed right-[340px] py-[64px] pr-l overflow-x-hidden overflow-y-scroll">
      {workspaces?.map((item) => (
        <div className="pl-[50px] py-l first:pt-[0px] last:pb-[0px] border-b-2 border-Gray-Secondary last:border-none flex flex-col gap-l justify-center items-start overflow-x-scroll">
          <ProjectCardContainer workspace={item} />
        </div>
      ))}
    </div>
  );
};

export default WorkspacesPage;
