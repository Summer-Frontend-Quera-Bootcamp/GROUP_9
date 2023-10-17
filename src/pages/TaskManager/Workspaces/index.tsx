import "./index.css"
import { workspaces } from "../../../constants";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCardContainer from "../../../components/TaskManager/Workspaces/ProjectCardContainer";

// <======== Hooks ========> //


const WorkspacesPage = () => {
  return (
    <div className="container fixed right-[340px] py-[64px] pr-l overflow-x-hidden overflow-y-scroll">
      {workspaces?.map((item) =>
        <div className="mb-l pb-l border-b-2 border-Gray-Secondary last:border-none">
            <ProjectCardContainer workspace={item} />
        </div>
      )}
    </div>
  );
};

export default WorkspacesPage;