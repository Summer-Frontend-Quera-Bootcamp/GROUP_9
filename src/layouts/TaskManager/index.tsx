import { Outlet } from "react-router-dom";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Sidebar from "./Sidebar";

// <======== Hooks ========> //


const TaskManager: React.FC = (): JSX.Element => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default TaskManager;
