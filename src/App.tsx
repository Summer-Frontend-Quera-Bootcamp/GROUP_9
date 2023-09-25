// <======== Code-Files ========> //
import "./index.css";

// <======== Component-Files ========> //
import MainLayout from "./pages/Main Pages/Layout";
import BoardView from "./pages/Main Pages/Board Pages/BoardView/index";
// <======== Hook ========> //


const App = () => {
  return (
    <>
    <MainLayout page="BoardView"></MainLayout>
    <BoardView/>
    </>
    
    
  );
};

export default App;