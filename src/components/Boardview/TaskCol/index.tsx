import Status from "./Status"
import {ColumnTasksList, ProjectList, SpacesAndProjectsList, Tasks } from "../../../api/SpacesAndProjectsData";
import TaskCard from "./TaskCard";
import {useDrop} from 'react-dnd'
import { useCallback, useContext, useState } from "react";
import update from 'immutability-helper'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../../../store";

interface Iprops{
    id:number;
    name:string;
    color:string;
    taskList:Tasks[];
    res:ProjectList[];
}


const TaskCol:React.FC<Iprops>=({id,name,color,taskList,res}):JSX.Element=>{
  // console.log("in col , tasks is : ",taskList," and its length is : ",taskList.length);  
  //const [tasks,SetTasks]=useState<Tasks[]>(taskList);
  console.log("task.length is : ",taskList.length);
  const {data,setData} = useContext(AppContext)
    // const removeitem=(id_:string)=>{
        
    //     let new_task = JSON.parse(JSON.stringify(tasks));
    //     new_task = new_task.filter((i:Tasks)=>i.id!==id_);
    //     console.log(name,"new tasks is : ",new_task);
    //     SetTasks([...new_task]);
    // }
    // console.log(name,tasks);
    let res_ = SpacesAndProjectsList.filter(item=>item.workSpacename=="کارهای شخصی")[0].projectList as Array<ProjectList>;
    let list  = res[0].TaskList;

    const [{},Drop]=useDrop(()=>({
      accept:"task",
      drop:(item:Tasks,monitor)=>{
        console.log("before find : data is : ",data);
        let up:ColumnTasksList[]= JSON.parse(JSON.stringify(data));
        // console.log("up is : ",up);
        up.forEach((col:ColumnTasksList,index:number)=>{
          col.taskList?.forEach((task,index1)=>{
            if(task.id==item.id){
              console.log("found the old position : ",col.taskList);
              col.taskList?.splice(index1,1);
              console.log(col.taskList);
            }
            
          })
          if(col.id==id){
            console.log("find the new position : ",col.taskList);
            col.taskList.push(item);
            console.log(col.taskList);
          }
        })
        console.log("update up is : ",up);
        list = up;
        setData(up);

      //  SetTasks(prevTasks => {
      //     if(prevTasks.filter(i => i.id === item.id).length === 0) {
      //         item.id = uuidv4();
      //         return [...prevTasks, item];
      //     }
      //     return prevTasks;
      // });
      }
    }))

    return (

        <section ref={Drop} key={id} className="h-full overflow-y-hidden overflow-x-hidden flex-shrink-0">
        <Status count={taskList?.length || 0} text={name} color={color}></Status>
        <div className="overflow-y-scroll max-h-[450px] flex flex-col space-y-[30px] overflow-x-hidden pt-[30px] pb-[50px]">
          {taskList?.map(task=><TaskCard  item={task} id={task.id} key={task.id} priority={task.priority} members={task.members||[]} labels={task.labels||[]} name={res[0].projectName} done={task.done} descroption={task?.description || ""} deadline={task.deadline}></TaskCard>)}
        </div>
      </section>

    )

}

export default TaskCol