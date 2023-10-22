// <======== Assest-Import ========> //
import { FilterIcon } from "../../../../assets/Icons/TaskManager/Layout/Navbar/Filter";

// <======== Component-Import ========> //
import SearchBox from "../../../common/SearchBox";

// <======== Hooks ========> //


interface ITaskProps extends React.PropsWithChildren {
  activePage?: "BoardView" | "ListView" | "CalenderView";
}

const TaskManagement: React.FC<ITaskProps> = ({
  activePage,
  children,
}): JSX.Element => {
  return (
    <section className="flex items-center pb-s pr-s border-b border-GrayLight w-full">
      <div className="w-[200px] ml-xl flex gap-[4px]">
        <SearchBox placeholder="جستجو بین تسک‌ها" />
      </div>
      <div className="w-[2px] h-[24px] bg-[#999]"></div>
      <div className="flex mr-xl items-center gap-[12px]">
        {activePage === "CalenderView" ? (
          children
        ) : (
          <>
            <div className="flex items-center justify-between gap-[6px] cursor-pointer">
              {FilterIcon}
              <p className="font-IranYekan400 text-BodyXS cursor-pointer">
                فیلترها
              </p>
            </div>
            <div className="flex items-center justify-center bg-Brand-Secondary py-[4px] px-[12px] rounded-[4px] ">
              <p className="text-Brand-Primary font-IranYekan400 text-BodyXS">
                دسته‌بندی‌شده با: وضعیت
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TaskManagement;
