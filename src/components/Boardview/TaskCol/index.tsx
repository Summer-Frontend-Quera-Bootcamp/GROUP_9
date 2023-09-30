import Status from "./Status"
import {ProjectList, Tasks } from "../../../api/SpacesAndProjectsData";
import TaskCard from "./TaskCard";
import {useDrop} from 'react-dnd'
import { useCallback, useState } from "react";
import update from 'immutability-helper'
import { v4 as uuidv4 } from 'uuid';

interface Iprops{
    id:number;
    name:string;
    color:string;
    taskList:Tasks[];
    res:ProjectList[];
}


const TaskCol:React.FC<Iprops>=({id,name,color,taskList,res}):JSX.Element=>{
    const [tasks,SetTasks]=useState<Tasks[]>(taskList);

    // const movecard = useCallback((dragindex:number, hoverindex:number  )=>{
    //     // return update(tasks,{
    //     //   $splice:[
    //     //     [dragindex,1],
    //     //     [hoverindex,0,tasks[dragindex]]
    //     //   ]
    //     // })
    // },[])

    // const removeitem=(id_:string)=>{
    //   const new_task = tasks.filter(i=>i.id!==id_);
    //   console.log(tasks,new_task);
    //   SetTasks([...new_task]);
    // }
    // console.log(tasks);
    const [{},Drop]=useDrop(()=>({
      accept:"task",
      drop:(item:Tasks,monitor)=>{
        console.log("tasks is : ",tasks,"\n and item is : ",item);
        console.log("\n \n this is repeat or not : ",tasks.filter(i=>i.id===item.id));
        SetTasks(prevTasks => {
          if(prevTasks.filter(i => i.id === item.id).length === 0) {
              item.id = uuidv4();
              return [...prevTasks, item];
          }
          return prevTasks;
      });
      }
    }))

    return (

        <section ref={Drop} key={id} className="h-full overflow-y-hidden overflow-x-hidden flex-shrink-0">
        <Status count={tasks?.length || 0} text={name} color={color}></Status>
        <div className="overflow-y-scroll max-h-[450px] flex flex-col space-y-[30px] overflow-x-hidden pt-[30px] pb-[50px]">
          {tasks?.map(task=><TaskCard item={task} id={task.id} key={task.id} priority={task.priority} members={task.members||[]} labels={task.labels||[]} name={res[0].projectName} done={task.done} descroption={task?.description || ""} deadline={task.deadline}></TaskCard>)}
        </div>
      </section>

    )

}

export default TaskCol