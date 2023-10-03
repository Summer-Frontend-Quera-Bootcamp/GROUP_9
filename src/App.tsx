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

// <======== Hooks ========> //

const App = () => {
  return <TaskManager page="BoardView"/>;
};

export default App;
