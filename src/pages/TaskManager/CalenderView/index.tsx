// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import CalenderView from "../../../components/TaskManager/CalenderView";
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";

// <======== Hooks ========> //

const CalenderViewPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar activePage="CalenderView" />
      <NewTaskBtn />
      <CalenderView></CalenderView>
    </>
  );
};

export default CalenderViewPage;
