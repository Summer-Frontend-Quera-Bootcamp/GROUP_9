// <======== Code-Files ========> //
import normalListIcon from "../../assets/Icon/NormalListIcon.svg";
import activeListIcon from "../../assets/Icon/ActiveListIcon.svg";
import normalBoardIcon from "../../assets/Icon/NormalBoardIcon.svg";
import activeBoardIcon from "../../assets/Icon/ActiveBoardIcon.svg";
import normalCalendarIcon from "../../assets/Icon/NormalCalendarIcon.svg";
import activeCalendarIcon from "../../assets/Icon/ActiveCalendarIcon.svg";
import ShareIcon from "../../assets/Icon/ShareIcon.svg";
import SearchIcon from "../../assets/Icon/SearchIcon.svg";
import FilterIcon from "../../assets/Icon/FilterIcon.svg";

// <======== Component-Files ========> //

interface IMainNavbarProps extends React.PropsWithChildren {
  activePage?: "BoardView" | "ListView" | "CalenderView";
}

const MainNavbar: React.FC<IMainNavbarProps> = ({
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
                <img src={`${activeListIcon}`} />
              ) : (
                <img src={`${normalListIcon}`} />
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
                <img src={`${activeBoardIcon}`} />
              ) : (
                <img src={`${normalBoardIcon}`} />
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
                <img src={`${activeCalendarIcon}`} />
              ) : (
                <img src={`${normalCalendarIcon}`} />
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
            <img src={`${ShareIcon}`} />
            <p className="font-IranYekan500 text-BodyM text-Black2 cursor-pointer">
              اشتراک‌گذاری
            </p>
          </div>
        </nav>
        {/* <Filter></Filter> */}
        <section className="flex items-center pb-s pr-s border-b border-GrayLight w-full">
          <div className="w-[200px] ml-xl flex gap-[4px]">
            <img src={`${SearchIcon}`} className="" />
            <input
              className="align-middle placeholder:align-middle outline-none font-IranYekan400 placeholder:font-IranYekan400 placeholder:text-GrayLight2 text-BodyXS placeholder:text-BodyXS"
              placeholder="جستجو بین تسک‌ها"
            ></input>
          </div>
          <div className="w-[2px] h-[24px] bg-[#999]"></div>
          <div className="flex mr-xl items-center gap-[12px]">
            <div className="flex items-center justify-between gap-[6px] cursor-pointer">
              <img src={`${FilterIcon}`} />
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

export default MainNavbar;
