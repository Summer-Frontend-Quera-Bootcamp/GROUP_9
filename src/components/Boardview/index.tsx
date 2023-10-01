// <======== Component-Files ========> //
// import Button from "../common/button";
import MainLayout from "../../pages/Main Pages/Layout";
import {ColumnTasksList, SpacesAndProjectsList} from '../../api/SpacesAndProjectsData'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ProjectList } from "../../api/SpacesAndProjectsData";
import TaskCol from "./TaskCol";
import { useState } from "react";
import { AppContext } from "../../store";


const Boardview = () => {

  let res = SpacesAndProjectsList.filter(item=>item.workSpacename=="کارهای شخصی")[0].projectList as Array<ProjectList>;
  let list  = res[0].TaskList;
  const [data,setData]=useState<ColumnTasksList[]|undefined>(list);
  console.log("data is : ",data);
  const tasks = data?.map(item=>{
    console.log("col : ",item.listName," and items is : ",item.taskList);
    return (
      <TaskCol key={item.id} id={item.id} name={item.listName} color={item.listColor} taskList={item.taskList || []} res={res}/>
    )
  });

  return (
    <AppContext.Provider value={{
      data,setData
    }}>
          <DndProvider backend={HTML5Backend}>
      <MainLayout page="BoardView">

        <main dir="ltr" className="w-[1118px] max-h-[513px] absolute left-[0px] top-[165px] flex-nowrap bg-White flex flex-row gap-[30px] pr-[20px] pl-[20px] pt-[20px] overflow-x-auto">
          {tasks}
        </main>
    
      </MainLayout>
    </DndProvider>
    </AppContext.Provider>
  );
};

export default Boardview;
