// <======== Assest-Import ========> //

// <======== Component-Import ========> //
// import { useEffect } from "react";
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";
//
// <======== Hooks ========> //

const BoardViewPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar activePage="BoardView" />
      <NewTaskBtn />
    </>
  );
};

export default BoardViewPage;
