import Status from "./Status"
import TaskCard from "./TaskCard";
import { useCallback, useContext, useEffect, useState } from "react";
import { Boards, Tasks } from "../../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchboard, fetchboards } from "../../../../services/features/workspace/boardSlice";
import { fetchtasks } from "../../../../services/features/workspace/taskSlice";

interface Iprops{
  id:number
}



const TaskCol:React.FC<Iprops>=({id}):JSX.Element=>{

  const dispatch =useDispatch();
  const [board,setBoard] = useState()
  const project = useSelector((state:any)=>state.current.project_id);
  const space = useSelector((state:any)=>state.current.workspace_id);
  const tasks = useSelector((state:any)=>state.task);
  console.log("space :",space," project : ",project);
  useEffect(()=>{
   dispatch(fetchboard({workspace_id:space,project_id:project,board_id:id})).then((e) => setBoard(e.payload));
   dispatch(fetchtasks({workspace_id:space,project_id:project,board_id:id}))
  },[])
  console.log("hey hey ",board);
  return (

        <section  key={board?.id} className="h-full overflow-y-hidden overflow-x-hidden flex-shrink-0">
        <Status count={board?.tasks_count} text={board?.name} color={board?.color}></Status>
        <div className="overflow-y-scroll max-h-[450px] flex flex-col space-y-[30px] overflow-x-hidden pt-[30px] pb-[50px]">
          {tasks?.map(task=><TaskCard name={board?.name} item={task} key={task.id} ></TaskCard>)}
        </div>
      </section>
      

    )

}

export default TaskCol