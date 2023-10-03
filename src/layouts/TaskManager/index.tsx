import { Workspaces } from "../../interfaces";
import { DndProvider } from 'react-dnd'

// <======== Assest-Import ========> //

import { TaskPlusButtonIcon } from "../../assets/Icons/TaskManager/Layout/TaskPlusButton";

// <======== Component-Import ========> //

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SidebarWorkSpacesList from "./Sidebar/WorkspacesList";

// <======== Hooks ========> //

import { useEffect, useState } from "react";
import { AppContext } from "../../store";
import { HTML5Backend } from "react-dnd-html5-backend";
import create from "../../services/http-services";

interface IMainLayoutProps extends React.PropsWithChildren {
  page: "BoardView" | "ListView" | "CalenderView" | "WorkSpace";
}

const TaskManager: React.FC<IMainLayoutProps> = ({
  children,
  page,
}): JSX.Element => {
  const [state, setState] = useState<Workspaces>()


  useEffect(() => {

    const {result , cancel } =create('/workspaces').getAll<Workspaces>();

    result.then((res)=>{
      setState(res.data[1]);
      console.log("result is :",res.data)
    })
    .catch(err=>console.log(err));
    return ()=> cancel()

  }, [])

  return (
    <AppContext.Provider 
    value={{
      state,setState
    }}>
          <DndProvider backend={HTML5Backend}>
          <Sidebar>
            <SidebarWorkSpacesList SpacesList={state?.workspaces} />
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
    </DndProvider>
    </AppContext.Provider>
  );
};

export default TaskManager;
