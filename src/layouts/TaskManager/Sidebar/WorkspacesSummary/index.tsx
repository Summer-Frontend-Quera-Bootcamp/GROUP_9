import "./index.css";

// <======== Assest-Import ========> //
import { SummaryOpenArrowIcon } from "../../../../assets/Icons/TaskManager/Layout/Sidebar/SummaryOpenArrow";
import { WorkSpacePlusButtonIcon } from "../../../../assets/Icons/TaskManager/Layout/Sidebar/WorkSpacePlusButton";

// <======== Component-Import ========> //
import SearchBox from "../../../../components/common/SearchBox";
import WorkspacesList from "./WorkspacesList";

// <======== Hooks ========> //


const WorkSpacesSummary: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="absolute top-[2px] left-[16px]">
        {SummaryOpenArrowIcon}
      </div>
      <details className="relative h-full">
        <summary
          className={`w-full font-IranYekan800 text-BoldM marker:content-[''] select-none cursor-pointer`}
        >
          ورک‌اسپیس‌ها
        </summary>
        <div className="w-full h-xl mt-s py-xs px-[15px] rounded-[4px] bg-[#F6F7F9] flex gap-[6px]">
          <SearchBox placeholder="جستجو کنید" backgroundColor="[#F6F7F9]" />
        </div>
        <div className="w-full dlHeight mt-s flex flex-col gap-s overflow-hidden">
          <button className="w-full h-l bg-[#D3D3D3] rounded-[6px] font-IranYekan400 text-BodyXS flex justify-center items-center gap-[4px]">
            {WorkSpacePlusButtonIcon}
            ساختن اسپیس جدید
          </button>
          <WorkspacesList />
        </div>
      </details>
    </>
  );
};

export default WorkSpacesSummary;
