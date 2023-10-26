// <======== Assest-Import ========> //

// <======== Component-Import ========> //
// import { useEffect } from "react";
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";
import { DndProvider } from 'react-dnd'
import { useCallback, useContext, useEffect, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskCol from "../../../components/TaskManager/BoardView/TaskCol";
import { useDispatch, useSelector } from "react-redux";
import { fetchboards } from "../../../services/features/workspace/boardSlice";
//
// <======== Hooks ========> //

const BoardViewPage: React.FC = (): JSX.Element => {


  // fetch boards data . 

  const dispatch =useDispatch();
  const project = useSelector((state:any)=>state.current.project_id);
  const space = useSelector((state:any)=>state.current.workspace_id);
  //const boards = useSelector((state)=>state.board);
  console.log("space :",space," project : ",project)

  const [boards,setBoards]= useState()

  useEffect(()=>{
    //.then((e)=>setBoards(e.payload));
    dispatch(fetchboards({workspace_id:space,project_id:project})).then((e)=>{
      setBoards(e.payload);
      console.log("boards",boards);
    });
  },[project]);

  

  const boardsitem = boards?.map(item=>{
    console.log(item);
    return (
      <TaskCol key={item.id} id={item.id} />
    )
  });


  return (
    <>
      <Navbar activePage="BoardView" />
      <div dir="ltr" className="w-[1118px] max-h-[513px] absolute left-[0px] top-[165px] flex-nowrap bg-White flex flex-row gap-[30px] pr-[20px] pl-[20px] pt-[20px] overflow-x-auto">
      {boardsitem}
      </div>
      <NewTaskBtn />
    </>
  );
};

export default BoardViewPage;
