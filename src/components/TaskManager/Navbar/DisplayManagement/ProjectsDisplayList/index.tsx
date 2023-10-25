// <======== Assest-Import ========> //
import { Link } from "react-router-dom";
import { ActiveBoardIcon } from "../../../../../assets/Icons/TaskManager/Layout/Navbar/ActiveBoard";
import { ActiveCalenderIcon } from "../../../../../assets/Icons/TaskManager/Layout/Navbar/ActiveCalendar";
import { ActiveListIcon } from "../../../../../assets/Icons/TaskManager/Layout/Navbar/ActiveList";
import { NormalBoardIcon } from "../../../../../assets/Icons/TaskManager/Layout/Navbar/NormalBoard";
import { NormalCalendarIcon } from "../../../../../assets/Icons/TaskManager/Layout/Navbar/NormalCalendar";
import { NormalListIcon } from "../../../../../assets/Icons/TaskManager/Layout/Navbar/NormalList";

// <======== Component-Import ========> //

// <======== Hooks ========> //

interface IProjectsDisplayProps {
  activePage?: "BoardView" | "ListView" | "CalenderView";
}

const ProjectsDisplayList: React.FC<IProjectsDisplayProps> = ({
  activePage = "BoardView",
}): JSX.Element => {
  const Pages = [
    {
      name: "ListView",
      title: "نمایش لیستی",
      activeIcon: ActiveListIcon,
      normalIcon: NormalListIcon,
      underline: (
        <div className="absolute top-[62px] right-[115px] w-[120px] h-[3px] bg-Brand-Primary rounded-full"></div>
      ),
    },
    {
      name: "BoardView",
      title: "نمایش ستونی",
      activeIcon: ActiveBoardIcon,
      normalIcon: NormalBoardIcon,
      underline: (
        <div className="absolute top-[62px] right-[271px] w-[123px] h-[3px] bg-Brand-Primary rounded-full"></div>
      ),
    },
    {
      name: "CalenderView",
      title: "تقویم",
      activeIcon: ActiveCalenderIcon,
      normalIcon: NormalCalendarIcon,
      underline: (
        <div className="absolute top-[62px] right-[427px] w-[69px] h-[3px] bg-Brand-Primary rounded-full"></div>
      ),
    },
  ];
  return (
    <>
      {Pages?.map((item) => {
        return (
          <Link key={item.title} to={`/taskmanager/${item.name}`}>
            <li className={"flex items-center pl-s gap-[5px] cursor-pointer"}>
              {activePage === item.name ? item.activeIcon : item.normalIcon}
              {activePage === item.name ? item.underline : null}
              <p
                className={`font-IranYekan500 text-BodyM cursor-pointer ${
                  activePage === item.name
                    ? "text-Brand-Primary"
                    : "text-Black2"
                }`}
              >
                {item.title}
              </p>
            </li>
          </Link>
        );
      })}
    </>
  );
};

export default ProjectsDisplayList;
