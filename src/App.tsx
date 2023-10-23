// <======== Assest-Import ========> //

// <======== Component-Import ========> //
// --------------------- AuthenticationPage --------------------- //
import ForgetPassword from "./pages/Authentication/ForgetPassword";
import Login from "./pages/Authentication/LogIn";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Success from "./pages/Authentication/Success";
// --------------------- TaskManagerPage --------------------- //
import TaskManager from "./layouts/TaskManager";
import ListViewPage from "./pages/TaskManager/ListView";
import BoardViewPage from "./pages/TaskManager/BoardView";
import CalenderViewPage from "./pages/TaskManager/CalenderView";
import WorkspacesPage from "./pages/TaskManager/Workspaces";
// --------------------- ProfilePage --------------------- //

// <======== Hooks ========> //
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./services/app/hooks";
import { fetchAccess } from "./services/features/authentication/refreshSlice";
import axios from "axios";
import { fetchworkspace } from "./services/features/workspace/workspaceSlice";
import { AXIOS } from "./config/axios.config";
const App = () => {
  const dispatch = useAppDispatch();
  //reHydration on state change:
  useEffect(() => {
    AXIOS.get("workspaces/")
      .then(() => console.log("no error"))
      .catch((error) =>
        error.message === "Request failed with status code 401"
          ? dispatch(
              fetchAccess({ refresh: String(localStorage.getItem("refresh")) })
            )
          : null
      );
  }, []);
  // useEffect(() => {
  //   dispatch(fetchworkspace());
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        // --------------------- AuthenticationPage --------------------- //
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Forget-password" element={<ForgetPassword />}></Route>
        <Route path="/Success" element={<Success />}></Route>
        <Route path="/Reset-password" element={<ResetPassword />}></Route>
        // --------------------- TaskManagerPage --------------------- //
        <Route path="/taskmanager" element={<TaskManager />}>
          <Route index element={<WorkspacesPage />} />
          <Route path="listview" element={<ListViewPage />} />
          <Route path="boardview" element={<BoardViewPage />} />
          <Route path="calenderview" element={<CalenderViewPage />} />
        </Route>
        // --------------------- ProfilePage --------------------- //
      </Routes>
    </BrowserRouter>
  );
};

export default App;
