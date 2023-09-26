// <======== Component-Files ========> //
// import Button from "../common/button";
import MainLayout from "../../pages/Main Pages/Layout";
import {SpacesAndProjectsList} from '../../api/SpacesAndProjectsData'
import Status from "../common/Status";
import { useEffect, useState } from "react";
import TaskCard from "../TaskCard";

const Boardview = () => {

  return (
    <MainLayout page="BoardView">

    <main dir="ltr" className="w-auto max-h-[523px] bg-White flex flex-row gap-[40px] pr-[20px] pl-[20px] pt-[20px] overflow-x-scroll">
      <div className="max-h-[500px] overflow-y-hidden ">
        <Status text="To Do" options color="Green"></Status>
        <div className="overflow-y-scroll max-h-[450px]">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-hidden ">
        <Status text="To Do" options color="Green"></Status>
        <div className="overflow-y-scroll max-h-[450px]">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-hidden ">
        <Status text="To Do" options color="Green"></Status>
        <div className="overflow-y-scroll max-h-[450px]">
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
          <TaskCard></TaskCard>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-hidden ">
        <Status text="To Do" options color="Green"></Status>
        <div className="overflow-y-scroll max-h-[450px]">
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
        </div>
      </div>

      <div className="max-h-[500px] overflow-y-hidden ">
        <Status text="To Do" options color="Green"></Status>
        <div className="overflow-y-scroll max-h-[450px]">
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
        </div>
      </div>
      <div className="max-h-[500px] overflow-y-hidden ">
        <Status text="To Do" options color="Green"></Status>
        <div className="overflow-y-scroll max-h-[450px]">
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
          <TaskCard done></TaskCard>
        </div>
      </div>
    </main>
        
    </MainLayout>
  );
};

export default Boardview;
