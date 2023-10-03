// <======== Component-Files ========> //
// import Button from "../common/button";

import { DndProvider } from 'react-dnd'
import { useCallback, useContext, useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskCol from "../../../components/TaskManager/BoardView/TaskCol";
import { AppContext } from "../../../store";
import { useFormContext } from 'react-hook-form';
import create from "./http-services";
import { string } from 'zod';
import { Boards } from '../../../interfaces';

const Boardview = () => {
  const {state,setState} = useContext(AppContext)

  
  let res = state?.projects[0].boards;
  let name = state?.projects[0].title;

  
  const tasks = res?.map((item:Boards)=>{
    console.log(item);
    return (
      <TaskCol key={item.id} col_item={item} name={name} />
    )
  });

  return (
        <main dir="ltr" className="w-[1118px] max-h-[513px] absolute left-[0px] top-[165px] flex-nowrap bg-White flex flex-row gap-[30px] pr-[20px] pl-[20px] pt-[20px] overflow-x-auto">
          {tasks}
        </main>
  );
};

export default Boardview;
