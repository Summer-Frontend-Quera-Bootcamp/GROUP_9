import "./index.css";
// <======== Assest-Import ========> //
import { BigCircleArrowBottomIcon } from "../../../assets/Icons/TaskManager/Pages/ListView/BigArrow";

// <======== Component-Import ========> //
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";
import ListViewProjectContainer from "../../../components/TaskManager/ListView/ProjectContainer";

// <======== Hooks ========> //
import { useEffect, useState } from "react";


const ListViewPage: React.FC = (): JSX.Element => {
  const [projectName, setProjectName] = useState(" ");
  useEffect(() => {
    setProjectName(String(localStorage.getItem("projectName")));
    console.log(projectName);
  }, [localStorage.projectName])
  return (
    <>
      <Navbar activePage="ListView" />
      <NewTaskBtn />
      <main className="WHListView fixed top-[198px] right-[356px] left-[50px] overflow-hidden">
        <header className="h-l flex gap-xs items-center">
          {BigCircleArrowBottomIcon}
          <h2 className="font-IranYekan800 text-HeadingXS flex items-center">
            {projectName}
          </h2>
        </header>
        <ListViewProjectContainer />
      </main>
    </>
  );
};

export default ListViewPage;
