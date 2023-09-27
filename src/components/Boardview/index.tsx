// <======== Component-Files ========> //
// import Button from "../common/button";
import MainLayout from "../../pages/Main Pages/Layout";
import {SpacesAndProjectsList} from '../../api/SpacesAndProjectsData'
import Status from "../common/Status";
import { useEffect, useState } from "react";
import TaskCard from "../TaskCard";
import { ProjectList } from "../../api/SpacesAndProjectsData";

const Boardview = () => {

  
  let res = SpacesAndProjectsList.filter(item=>item.workSpacename=="کارهای شخصی")[0].projectList as Array<ProjectList>;
  let list  = res[0].TaskList;
  console.log(list);
  const tasks = list?.map(item=>{
    return (
      <div key={item.id} className="h-full overflow-y-hidden overflow-x-hidden flex-shrink-0">
      <Status count={item.taskList?.length || 0} text={item.listName} color={item.listColor}></Status>
      <div className="overflow-y-scroll max-h-[450px] flex flex-col space-y-[30px] overflow-x-hidden pt-[30px] pb-[50px]">
        {item.taskList?.map(task=><TaskCard key={task.id} priority={task.priority} members={task.members||[]} labels={task.labels||[]} name={res[0].projectName} done={task.done} descroption={task?.description || ""} deadline={task.deadline}></TaskCard>)}
      </div>
    </div>

    )
  });




  return (
    <MainLayout page="BoardView">

    <main dir="ltr" className="w-[1118px] max-h-[513px] absolute left-[0px] top-[165px] flex-nowrap bg-White flex flex-row gap-[30px] pr-[20px] pl-[20px] pt-[20px] overflow-x-auto">
      {tasks}
    </main>
        
    </MainLayout>
  );
};

export default Boardview;
