// <======== Assest-Import ========> //
import { TaskPlusButtonIcon } from "../../assets/Icons/TaskManager/Layout/TaskPlusButton";

// <======== Component-Import ========> //
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// <======== Hooks ========> //

interface IMainLayoutProps extends React.PropsWithChildren {
  page: "BoardView" | "ListView" | "CalenderView" | "WorkSpace";
}

const TaskManager: React.FC<IMainLayoutProps> = ({
  children,
  page,
}): JSX.Element => {
  return (
    <>
      <Sidebar />
      {page !== "WorkSpace" && (
        <>
          <Navbar activePage={`${page}`} />
          <button className="w-[118px] fixed bottom-[30px] left-[50px] bg-Brand-Primary px-xs py-[12px] rounded-[6px] flex items-center gap-[4px] z-10">
            {TaskPlusButtonIcon}
            <p className="font-IranYekan800 text-BodyS text-White cursor-pointer">
              تسک جدید
            </p>
          </button>
        </>
      )}
      {children}
    </>
  );
};

export default TaskManager;
