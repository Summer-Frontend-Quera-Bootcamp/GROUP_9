// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Sidebar from "./Sidebar";

// <======== Hooks ========> //
import { Outlet } from "react-router-dom";

const TaskManager: React.FC = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default TaskManager;
