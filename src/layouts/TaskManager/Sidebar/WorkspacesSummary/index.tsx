import "./index.css";

// <======== Assest-Import ========> //
import { SummaryOpenArrowIcon } from "../../../../assets/Icons/TaskManager/Layout/Sidebar/SummaryOpenArrow";
import { WorkSpacePlusButtonIcon } from "../../../../assets/Icons/TaskManager/Layout/Sidebar/WorkSpacePlusButton";

// <======== Component-Import ========> //
import SearchBox from "../../../../components/common/SearchBox";
import SpacesAndProjectsList from "./SpacesAndProjectsList";

import { useEffect, useState } from "react";
import { fetchworkspace } from "../../../../services/features/workspace/workspaceSlice";
import { useAppDispatch } from "../../../../services/app/hooks";
import { showfirstmodal } from "../../../../services/features/workspace/workspacemodalSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../services/app/store";
import { Workspaces } from "../../../../interfaces/TaskManager";

// <======== Constants ========> //
// import { workspaces } from "../../../../constants";

// <======== Hooks ========> //

const WorkSpacesSummary: React.FC = (): JSX.Element => {
  const workspaceslist = useSelector((state: RootState) => state.workspace);
  const dispatch = useAppDispatch();
  const [workspaces, setWorkspaces] = useState([]);
  useEffect(() => {
    dispatch(fetchworkspace()).then((e) => setWorkspaces(e.payload));
  }, [, workspaceslist]);

  const handleClick = () => {
    dispatch(showfirstmodal());
  };
  return (
    <>
      <div className="absolute top-[2px] left-[0px]">
        {SummaryOpenArrowIcon}
      </div>
      <details className="relative h-full" open>
        <summary
          className={`w-full font-IranYekan800 text-BoldM marker:content-[''] select-none cursor-pointer`}
        >
          ورک‌اسپیس‌ها
        </summary>
        <div className="w-full h-xl mt-s py-xs px-[15px] rounded-[4px] bg-[#F6F7F9] flex gap-[6px]">
          <SearchBox placeholder="جستجو کنید" backgroundColor="[#F6F7F9]" />
        </div>
        <div className="w-full dlHeight mt-s flex flex-col gap-s overflow-hidden">
          <button
            onClick={handleClick}
            className="w-full h-[36px] bg-[#D3D3D3] rounded-[6px] font-IranYekan400 text-BodyXS flex justify-center items-center gap-[4px]"
          >
            {WorkSpacePlusButtonIcon}
            ساختن اسپیس جدید
          </button>
          <SpacesAndProjectsList
            SpacesList={workspaces.sort((a: Workspaces, b: Workspaces) => Number(a.id) - Number(b.id))}
          />
        </div>
      </details>
    </>
  );
};

export default WorkSpacesSummary;
