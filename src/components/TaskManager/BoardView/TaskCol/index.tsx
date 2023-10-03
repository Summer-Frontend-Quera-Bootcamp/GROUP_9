import Status from "./Status"
import TaskCard from "./TaskCard";
import {useDrop} from 'react-dnd'
import { useCallback, useContext, useState } from "react";
import update from 'immutability-helper'
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from "../../../../store";
import { Boards, Tasks } from "../../../../interfaces";

interface Iprops{
   name:string;
   col_item:Boards
}


const TaskCol:React.FC<Iprops>=({name,col_item}):JSX.Element=>{
   
  const {state,setState}=useContext(AppContext);

  console.log("task.length is : ",col_item?.tasks);

    // const removeitem=(id_:string)=>{
        
    //     let new_task = JSON.parse(JSON.stringify(tasks));
    //     new_task = new_task.filter((i:Tasks)=>i.id!==id_);
    //     console.log(name,"new tasks is : ",new_task);
    //     SetTasks([...new_task]);
    // }
    // console.log(name,tasks);
    // let res_ = SpacesAndProjectsList.filter(item=>item.workSpacename=="کارهای شخصی")[0].projectList as Array<ProjectList>;
    // let list  = res[0].TaskList;

    const [{},Drop]=useDrop(()=>({
      accept:"task",
      drop:(item:Tasks,monitor)=>{
        console.log("before find : data is : ",state);
        let up:Boards[]= JSON.parse(JSON.stringify(state));
        // console.log("up is : ",up);
        up.forEach((col:Boards,index:number)=>{
          col.tasks?.forEach((task,index1)=>{
            if(task.id==item.id){
              console.log("found the old position : ",col.tasks);
              col.tasks?.splice(index1,1);
              console.log(col.tasks);
            }
            
          })
          if(col.id==col_item.id){
            console.log("find the new position : ",col.tasks);
            col.tasks?.push(item);
            console.log(col.tasks);
          }
        })
        console.log("update up is : ",up);
        setState(up);

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

        <section ref={Drop} key={col_item.id} className="h-full overflow-y-hidden overflow-x-hidden flex-shrink-0">
        <Status count={col_item.tasks?.length || 0} text={col_item.title} color={col_item.color}></Status>
        <div className="overflow-y-scroll max-h-[450px] flex flex-col space-y-[30px] overflow-x-hidden pt-[30px] pb-[50px]">
          {col_item.tasks?.map(task=><TaskCard name={name} item={task} key={task.id} ></TaskCard>)}
        </div>
      </section>

    )

}

export default TaskCol