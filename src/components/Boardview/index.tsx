// <======== Component-Files ========> //
// import Button from "../common/button";
import MainLayout from "../../pages/Main Pages/Layout";
import {SpacesAndProjectsList} from '../../api/SpacesAndProjectsData'
import { ProjectList } from "../../api/SpacesAndProjectsData";
import TaskCol from "./TaskCol";


const Boardview = () => {

  let res = SpacesAndProjectsList.filter(item=>item.workSpacename=="کارهای شخصی")[0].projectList as Array<ProjectList>;
  let list  = res[0].TaskList;
  console.log(list);

  const tasks = list?.map(item=>{
    return (
      <TaskCol id={item.id} name={item.listName} color={item.listColor} taskList={item.taskList || []} res={res}/>
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
