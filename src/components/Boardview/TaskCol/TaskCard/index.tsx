// <======== Component-Files ========> //
import '../../../../index.css'
import { Label, Tasks } from "../../../../api/SpacesAndProjectsData";
import { Member } from "../../../../api/SpacesAndProjectsData";
import TaskDescription from "./TaskDescription";
import TaskInfo from "./TaskInfo";
import TaskTags from "./TaskTags";
import TaskDone from "./TaskDone";
import {useDrag, useDrop} from 'react-dnd'
import { useRef } from 'react';

export interface ITaskCard{
  // removeItem:(id:string)=>void;
  item:Tasks;
  id:string;
  name:string;
  descroption:string;
  deadline:string;
  priority?:"Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
  members:Member[];
  labels:Label[];
  done?:boolean;
  // movecard:(dragindex:number,hoverindex:number)=>void;
}


const TaskCard:React.FC<ITaskCard> = ({item,name,descroption,priority="Nothing",deadline,members,labels,done=false}):JSX.Element => {
  
  // console.log("task is : ",item);
  // const [{handleid},drop]=useDrop(()=>({
  //   accept:"task",
  //   collect(monitor){
  //     return{
  //       handleid:monitor.getHandlerId()
  //     }
  //   },
  //   hover(item:any,monitor){
  //     const dragindex = item.id;
  //     const hoverindex = id;
  //   }
  // }))
  
  
  
  const [{isDragging},drag]=useDrag(()=>({
    type:"task",
    item:item,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        console.log("droooooooooooooooooooooooooooooped");
        // removeItem(item.id);
      }
    },
    collect(monitor){
      return {
        isDragging: !!monitor.isDragging(),
        // isDropped : !!monitor.didDrop()
      }
    }
  }));
  if(isDragging){
    return null;
  };
  return (
    <article ref={drag} dir="rtl" className="w-[230px] h-auto border-0 rounded-xl flex flex-col itmes-center justify-center space-y-[20px] shadow-TaskCard pt-[20px] pl-[10px] pr-[10px] pb-[20px]">

          <TaskDescription name={name} members={members} descroption={descroption} />

          <TaskInfo priority={priority} deadline={deadline}/>

          <TaskTags labels={labels}/>

          { done && <TaskDone/> }

    </article>
  );
};

export default TaskCard;
