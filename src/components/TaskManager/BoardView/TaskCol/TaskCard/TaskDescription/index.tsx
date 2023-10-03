import { BsTextLeft } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import {useContext} from 'react'
import { Members, Tasks } from "../../../../../../interfaces";
import { AppContext } from "../../../../../../store";
interface Iprops{
  task:Tasks
  name:string
}



const TaskDescription:React.FC<Iprops>=({name,task}):JSX.Element=>{

    console.log("description is :",task);


    return (
        <div className="flex flex-row w-full itmes-center justify-between flex-wrap pl-[10px] pr-[10px]">
        <h2 className="font-IranYekan400 text-BodyXS">{name}</h2>
        <div className="w-[100px] flex flex-row items-center justify-end gap-1 overflow-visible" > 
        {task?.members?.length!==0 && 
          
          task?.members?.map((member,index)=>{
            const class_ = `w-[24px] h-[24px]  z-[${index}] rounded-full bg-${member?.userColor}-Secondary font-IranYekan500 text-[8.14px] text-${member?.userColor}-Primary flex items-center justify-center`;
            return (
              
              <div key={uuidv4()} className={class_}>
                {member?.userName.split(" ").map(item=>item[0])}
              </div>
            )
          })
          }
        </div>
        <h2 className={`w-full font-IranYekan400 text-BodyXS items-center mt-[${task?.description}?'20px':'0px'}] `}>{task?.description && (<>{task?.description}<button className="mr-[5px] "><BsTextLeft/></button></>)}</h2>
      </div>
    )
};


export default TaskDescription;