import { Workspaces } from "../../interfaces";
import { AXIOS } from "../../config/axios.config";
import { API_URLS } from "../../constants/api.urls";

// <======== Assest-Import ========> //
import { TaskPlusButtonIcon } from "../../assets/Icons/TaskManager/Layout/TaskPlusButton";

// <======== Component-Import ========> //
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidebarWorkSpacesList from "./Sidebar/WorkspacesList";

// <======== Hooks ========> //
import { useEffect, useState } from "react";

interface IMainLayoutProps extends React.PropsWithChildren {
  page: "BoardView" | "ListView" | "CalenderView" | "WorkSpace";
}

const TaskManager: React.FC<IMainLayoutProps> = ({
  children,
  page,
}): JSX.Element => {
  const [state, setState] = useState<Workspaces[]>([])

  const fetchWorkspaces = async () => {
    const response = await AXIOS.get(API_URLS.GetWorkspaces);
    setState(response.data)
  };

  useEffect(() => {
    fetchWorkspaces();
  }, [])

  return (
    <>
      <Sidebar>
        <SidebarWorkSpacesList SpacesList={state} />
      </Sidebar>
      {page !== "WorkSpace" && (
        <>
          <Navbar activePage={`${page}`} />
          <button className="w-[118px] fixed bottom-[30px] left-[50px] bg-Brand-Primary px-xs py-[12px] rounded-[6px] flex items-center gap-[4px] z-10">
            {TaskPlusButtonIcon}
            <p className="font-IranYekan800 text-BodyS text-White cursor-pointer">
              تسک جدید
            </p>
          </button>
        </>
      )}
      {children}
    </>
  );
};

export default TaskManager;
