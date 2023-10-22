// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import NewProjectModal from "../../components/TaskManager/Modals/Create/Project";
import NewSpaceModalNameSelection from "../../components/TaskManager/Modals/Create/Workspace/Step1NameSelection";
import NewSpaceModalColorSelection from "../../components/TaskManager/Modals/Create/Workspace/Step2ColorSelection";
import Sidebar from "./Sidebar";

// <======== Hooks ========> //
import { Outlet } from "react-router-dom";

const TaskManager: React.FC = (): JSX.Element => {
  return (
    <>
      {/* ============ Create-Modals ============ */}
      <NewProjectModal/>
      <NewSpaceModalNameSelection/>
      <NewSpaceModalColorSelection/>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default TaskManager;
