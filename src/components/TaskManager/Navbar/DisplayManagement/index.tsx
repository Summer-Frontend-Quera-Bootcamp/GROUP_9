// <======== Assest-Import ========> //
import { ShareIcon } from "../../../../assets/Icons/CommonIcon/ShareIcon";

// <======== Component-Import ========> //
import ProjectsDisplayList from "./ProjectsDisplayList";

// <======== Hooks ========> //
import { useEffect, useState } from "react";


interface IDisplayProps {
  activePage?: "BoardView" | "ListView" | "CalenderView";
}

const DisplayManagement: React.FC<IDisplayProps> = ({
  activePage,
}): JSX.Element => {
  const [projectName, setProjectName] = useState(" ");
  useEffect(() => {
    setProjectName(String(localStorage.getItem("projectName")));
    console.log(projectName);
  }, [localStorage.projectName])
  return (
    <nav className="relative flex items-center justify-between w-full mb-s py-s border-b-[0.5px] border-GrayLight">
      <ul className="flex items-center justify-between divide-x-[2px] divide-[#999] gap-s">
        <h2 className="text-black font-IranYekan800 text-HeadingXS leading-8">
          {projectName}
        </h2>
        <div className="border-x h-[22px] w-[3px]"></div>
        <ProjectsDisplayList activePage={activePage} />
      </ul>
      <div className="flex items-center justify-center gap-[5px] cursor-pointer">
        {ShareIcon}
        <p className="font-IranYekan500 text-BodyM text-Black2 cursor-pointer">
          اشتراک‌گذاری
        </p>
      </div>
    </nav>
  );
};

export default DisplayManagement;
