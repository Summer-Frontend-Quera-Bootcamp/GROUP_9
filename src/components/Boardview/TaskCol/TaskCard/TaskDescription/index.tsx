import { BsTextLeft } from "react-icons/bs";
import { Member } from "../../../../../api/SpacesAndProjectsData";
import { v4 as uuidv4 } from 'uuid';
interface Iprops{
    name:string;
    descroption:string;
    members:Member[]
}



const TaskDescription:React.FC<Iprops>=({name,descroption,members}):JSX.Element=>{


    return (
        <div className="flex flex-row w-full itmes-center justify-between flex-wrap pl-[10px] pr-[10px]">
        <h2 className="font-IranYekan400 text-BodyXS">{name}</h2>
        <div className="w-[100px] flex flex-row items-center justify-end gap-1 overflow-visible" > 
        {members.length!==0 && 
          
          members.map((member,index)=>{
            const class_ = `w-[24px] h-[24px]  z-[${index}] rounded-full bg-${member?.Color}-Secondary font-IranYekan500 text-[8.14px] text-${member?.Color}-Primary flex items-center justify-center`;
            return (
              
              <div key={uuidv4()} className={class_}>
                {member?.userName.split(" ").map(item=>item[0])}
              </div>
            )
          })
          }
        </div>
        <h2 className={`w-full font-IranYekan400 text-BodyXS items-center mt-[${descroption?'20px':'0px'}] `}>{descroption && (<>{descroption}<button className="mr-[5px] "><BsTextLeft/></button></>)}</h2>
      </div>
    )
};


export default TaskDescription;