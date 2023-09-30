import Status from "./Status"
import { Label, Member, ProjectList, Tasks } from "../../../api/SpacesAndProjectsData";
import TaskCard from "./TaskCard";

interface Iprops{
    id:number;
    name:string;
    color:string;
    taskList:Tasks[];
    res:ProjectList[];
}


const TaskCol:React.FC<Iprops>=({id,name,color,taskList,res}):JSX.Element=>{

    return (

        <section key={id} className="h-full overflow-y-hidden overflow-x-hidden flex-shrink-0">
        <Status count={taskList?.length || 0} text={name} color={color}></Status>
        <div className="overflow-y-scroll max-h-[450px] flex flex-col space-y-[30px] overflow-x-hidden pt-[30px] pb-[50px]">
          {taskList?.map(task=><TaskCard key={task.id} priority={task.priority} members={task.members||[]} labels={task.labels||[]} name={res[0].projectName} done={task.done} descroption={task?.description || ""} deadline={task.deadline}></TaskCard>)}
        </div>
      </section>

    )

}

export default TaskCol