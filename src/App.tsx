import { AXIOS } from "./config/axios.config";
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
import ProfilePage from "./layouts/Profile";
import AccountInformation from "./pages/Profile/AccountInfo";
import UserInformation from "./pages/Profile/PersonalInfo";
import Setting from "./pages/Profile/Setting";

// <======== Hooks ========> //
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch } from "./services/app/hooks";

// <======== Features ========> //
import { fetchAccess } from "./services/features/authentication/refreshSlice";


const App = () => {
  const dispatch = useAppDispatch();
  //reHydration on state change:
  useEffect(() => {
    AXIOS.get("workspaces/").catch((error) =>
      error.message === "Request failed with status code 401"
        ? dispatch(
            fetchAccess({ refresh: String(localStorage.getItem("refresh")) })
          )
        : null
    );
  }, []);
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
        <Route path="/profile" element={<ProfilePage />}>
          <Route
            index
            path="userinformatiton"
            element={<AccountInformation />}
          />
          <Route path="accountinformation" element={<UserInformation />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
