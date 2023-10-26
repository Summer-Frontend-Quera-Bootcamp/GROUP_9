import { BsFlag } from "react-icons/bs"
import { CiSquareCheck } from "react-icons/ci";


interface Iprops{
priority:number;
deadline:string;
}


const TaskInfo:React.FC<Iprops>=({priority,deadline}):JSX.Element=>{


    return(
        <div className="w-full h-[21px] flex flex-row itmes-center justify-start gap-[5px]">
        {priority=="Emergency"?(<BsFlag className="text-Red-Primary"/>):priority=="High"?(<BsFlag className="text-Orange-Primary"/>):priority=="Intermediate"?(<BsFlag className="text-Green-Primary"/>):(<BsFlag className="text-Black"/>)}

        <h3 className="font-IranYekan400 text-BodyXS flex items-center">{deadline}</h3>
        <h3 className="flex flex-row items-center font-IranYekan400 text-BodyXS text-GrayLight3"><CiSquareCheck className="w-[16px] h-[16px] ml-[5px]"/>١۲/۲</h3>
      </div>
    )
};

export default TaskInfo;