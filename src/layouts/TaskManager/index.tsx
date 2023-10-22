// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import NewProjectModal from "../../components/TaskManager/Modals/Create/Project";
import NewSpaceModal from "../../components/TaskManager/Modals/Create/Workspace";
import Sidebar from "./Sidebar";

// <======== Hooks ========> //
import { Outlet } from "react-router-dom";

const TaskManager: React.FC = (): JSX.Element => {
  return (
    <>
      <NewProjectModal/>
      <NewSpaceModal/>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default TaskManager;
