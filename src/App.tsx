// <======== Code-Files ========> //
import "./index.css";


// <======== Component-Files ========> //
// import LogInPage from "./pages/Authentication Pages/Login Page";
import ListView from "./pages/Main Pages/Board Pages/ListView";
import Sidebar from "./components/Sidebar";
import AuthenticationLayout from "./pages/Authentication Pages/Layout";
// <======== Hook ========> //

const App = () => {
  return (
    <>
      
      {/* <LogInPage /> */}
      <Sidebar></Sidebar>
      <ListView />
    </>
  );
};

export default App;
