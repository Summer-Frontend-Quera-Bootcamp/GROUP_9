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
  const boards = useSelector((state:any)=>state.board);
  console.log("space :",space," project : ",project)
  useEffect(()=>{
    dispatch(fetchboards({workspace_id:space,project_id:project}));
  },[space])
  console.log("hey hey ",boards);

  const boardsitem = boards?.map(item=>{
    console.log(item);
    return (
      <TaskCol key={item.id} id={item.id} />
    )
  });


  return (
    <>
      <Navbar activePage="BoardView" />
      {boardsitem}
      <NewTaskBtn />
    </>
  );
};

export default BoardViewPage;
