import { BiDotsHorizontalRounded } from "react-icons/bi"
import { FiCheckCircle } from "react-icons/fi"

const TaskDone:React.FC=():JSX.Element=>{

    return (
        <>
        <div className="w-[90%] ml-auto mr-auto border border-GrayLight4"></div>
        <div className="flex flex-row justify-between w-[90%] h-[20px] items-center">
            <FiCheckCircle className="w-[20px] h-[20px]"/>
            <BiDotsHorizontalRounded className="w-[20px] h-[20px]"/>
        </div> 
    </>
    )
};

export default TaskDone;