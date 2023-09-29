// <======== Assest-Import ========> //
import { SearchIcon } from "../../../assets/Icons/CommonIcon/SearchIcon";
import { ShareIcon } from "../../../assets/Icons/CommonIcon/ShareIcon";
import { ActiveBoardIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/ActiveBoard";
import { ActiveCalenderIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/ActiveCalendar";
import { ActiveListIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/ActiveList";
import { FilterIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/Filter";
import { NormalBoardIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/NormalBoard";
import { NormalCalendarIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/NormalCalendar";
import { NormalListIcon } from "../../../assets/Icons/TaskManager/Layout/Navbar/NormalList";

// <======== Component-Import ========> //

// <======== Hooks ========> //

interface IMainNavbarProps extends React.PropsWithChildren {
  activePage?: "BoardView" | "ListView" | "CalenderView";
}

const Navbar: React.FC<IMainNavbarProps> = ({
  activePage = "BoardView",
}): JSX.Element => {
  const handleItemClick = () => {};
  return (
    <>
      <header className="fixed w-full top-[41px] right-[356px] left-[50px]">
        <nav className="relative flex items-center justify-between w-full mb-s py-s border-b-[0.5px] border-GrayLight">
          <ul className="flex items-center justify-between divide-x-[2px] divide-[#999] gap-s">
            <h2 className="text-black font-IranYekan800 text-HeadingXS leading-8">
              پروژه اول
            </h2>
            <div className="border-x h-[22px] w-[3px]"></div>
            <li
              className={"flex items-center pl-s gap-[5px] cursor-pointer"}
              onClick={handleItemClick}
            >
              {activePage === "ListView" ? (
                ActiveListIcon
              ) : (
                NormalListIcon
              )}
              {activePage === "ListView" ? (
                <div className="absolute top-[62px] right-[115px] w-[120px] h-[3px] bg-Brand-Primary rounded-full"></div>
              ) : null}
              <p
                className={`font-IranYekan500 text-BodyM cursor-pointer ${
                  activePage === "ListView"
                    ? "text-Brand-Primary"
                    : "text-Black2"
                }`}
              >
                نمایش لیستی
              </p>
            </li>
            <li
              className={"flex items-center pl-s gap-[5px] cursor-pointer"}
              onClick={handleItemClick}
            >
              {activePage === "BoardView" ? (
                ActiveBoardIcon
              ) : (
                NormalBoardIcon
              )}
              {activePage === "BoardView" ? (
                <div className="absolute top-[62px] right-[271px] w-[123px] h-[3px] bg-Brand-Primary rounded-full"></div>
              ) : null}
              <p
                className={`font-IranYekan500 text-BodyM cursor-pointer ${
                  activePage === "BoardView"
                    ? "text-Brand-Primary"
                    : "text-Black2"
                }`}
              >
                نمایش ستونی
              </p>
            </li>
            <li
              className={"flex items-center pl-s gap-[5px] cursor-pointer"}
              onClick={handleItemClick}
            >
              {activePage === "CalenderView" ? (
                ActiveCalenderIcon
              ) : (
                NormalCalendarIcon
              )}
              {activePage === "CalenderView" ? (
                <div className="absolute top-[62px] right-[427px] w-[69px] h-[3px] bg-Brand-Primary rounded-full"></div>
              ) : null}
              <p
                className={`font-IranYekan500 text-BodyM cursor-pointer ${
                  activePage === "CalenderView"
                    ? "text-Brand-Primary"
                    : "text-Black2"
                }`}
              >
                تقویم
              </p>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-[5px] cursor-pointer">
            {ShareIcon}
            <p className="font-IranYekan500 text-BodyM text-Black2 cursor-pointer">
              اشتراک‌گذاری
            </p>
          </div>
        </nav>
        {/* <Filter></Filter> */}
        <section className="flex items-center pb-s pr-s border-b border-GrayLight w-full">
          <div className="w-[200px] ml-xl flex gap-[4px]">
            {SearchIcon}
            <input
              className="align-middle placeholder:align-middle outline-none font-IranYekan400 placeholder:font-IranYekan400 placeholder:text-GrayLight2 text-BodyXS placeholder:text-BodyXS"
              placeholder="جستجو بین تسک‌ها"
            ></input>
          </div>
          <div className="w-[2px] h-[24px] bg-[#999]"></div>
          <div className="flex mr-xl items-center gap-[12px]">
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
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
