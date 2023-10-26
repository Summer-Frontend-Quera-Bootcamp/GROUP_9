// <======== Assest-Import ========> //

// <======== Component-Import ========> //
// import { useEffect } from "react";
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";
//
// <======== Hooks ========> //

const BoardViewPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar activePage="BoardView" />
      <NewTaskBtn />
      <div className="fixed top-[181px] right-[356px] w-[250px] py-[8px] p-[12px] rounded-[16px] shadow-boardHeader font-IranYekan500 text-[16px] flex justify-start items-center cursor-pointer">
        + ساختن برد جدید
      </div>
    </>
  );
};

export default BoardViewPage;
