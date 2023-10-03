// <======== Assest-Import ========> //

// <======== Component-Import ========> //
// --------------------- AuthenticationPage --------------------- //
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import LogIn from "./pages/Authentication/LogIn";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Success from "./pages/Authentication/Success";
// --------------------- TaskManagerPage --------------------- //
import TaskManager from "./layouts/TaskManager";
import Boardview from "./pages/TaskManager/BoardView";

// <======== Hooks ========> //

const App = () => {
  return <TaskManager page="BoardView">
    <Boardview></Boardview>
  </TaskManager>;
};

export default App;
