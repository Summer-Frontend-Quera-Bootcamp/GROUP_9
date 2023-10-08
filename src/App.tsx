// <======== Assest-Import ========> //

//import TaskInformation from "./components/TaskManager/Modals/Information/Task";
import WorkSpace from "./components/TaskManager/Workspaces";
//import TaskInformation from "./components/TaskManager/Modals/Information/Task";
//import ShareTask from "./components/TaskManager/Modals/Share/Task";

// <======== Component-Import ========> //
// --------------------- AuthenticationPage --------------------- //

// --------------------- TaskManagerPage --------------------- //

// <======== Hooks ========> //

const App = () => {
  return (
    <WorkSpace
      WorkSpace={[
        {
          color: "Blue-Primary",
          id: 1,
          title: "اول",
          projects: [{ id: 2, title: "اووول" }],
        },
      ]}
    />
  );
};

export default App;
