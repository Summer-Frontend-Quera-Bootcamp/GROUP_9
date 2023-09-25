// <======== Code-Files ========> //
//import NewProjectCard from "./components/NewProjectCard";
import "./index.css";

// <======== Component-Files ========> //
import MainLayout from "./pages/Main Pages/Layout";
import WorkSpace from "./pages/Main Pages/WorkSpace Page";

// <======== Hook ========> //
import { SpacesAndProjectsList } from "./api/SpacesAndProjectsData";
const App = () => {
  return (
    <MainLayout page="WorkSpace">
      <WorkSpace WorkSpace={SpacesAndProjectsList} />
    </MainLayout>
  );
};

export default App;
