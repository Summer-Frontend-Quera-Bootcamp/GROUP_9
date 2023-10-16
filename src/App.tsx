import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/authentication" />}/>
        // --------------------- AuthenticationPage --------------------- //
        <Route path="/authentication">
          <Route index element={<LogIn />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="resetpassword" element={<ResetPassword />}></Route>
          <Route path="forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="success" element={<Success />}></Route>
        </Route>
        // --------------------- TaskManagerPage --------------------- //
        <Route path="/taskmanager">
          <Route index element={<TaskManager page="CalenderView" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
