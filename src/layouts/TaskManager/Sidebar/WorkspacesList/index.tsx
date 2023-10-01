import "./index.css";

// <======== Assest-Import ========> //
import { SearchIcon } from "../../../../assets/Icons/CommonIcon/SearchIcon";
import { SummaryOpenArrowIcon } from "../../../../assets/Icons/TaskManager/Layout/Sidebar/SummaryOpenArrow";
import { WorkSpacePlusButtonIcon } from "../../../../assets/Icons/TaskManager/Layout/Sidebar/WorkSpacePlusButton";

// <======== Interface-Import ========> //
import { Workspaces } from "../../../../interfaces";

// <======== Component-Import ========> //

// <======== Hooks ========> //

interface IProps {
  SpacesList: Array<Workspaces>;
}

const SidebarWorkSpacesList: React.FC<IProps> = ({
  SpacesList,
}): JSX.Element => {
  return (
    <>
      <div className="absolute top-[2px] left-[16px]">
        {SummaryOpenArrowIcon}
      </div>
      <details className="relative h-full">
        <summary
          className={`w-full font-IranYekan800 text-BoldM marker:content-[''] select-none cursor-pointer`}
        >
          ورک‌اسپیس‌ها
        </summary>
        <div className="w-full h-xl mt-s py-xs px-[15px] rounded-[4px] bg-[#F6F7F9] flex gap-[6px]">
          {SearchIcon}
          <input
            className="w-full bg-[#F6F7F9] outline-none font-IranYekan400 placeholder:font-IranYekan400 placeholder:text-GrayLight2 text-BodyXS placeholder:text-BodyXS"
            placeholder="جستجو کنید ..."
            type="text"
          />
        </div>
        <div className="w-full dlHeight mt-s flex flex-col gap-s overflow-hidden">
          <button className="w-full h-l bg-[#D3D3D3] rounded-[6px] font-IranYekan400 text-BodyXS flex justify-center items-center gap-[4px]">
            {WorkSpacePlusButtonIcon}
            ساختن اسپیس جدید
          </button>
          <dl className="h-full flex flex-col gap-s overflow-scroll">
            {SpacesList?.map((space) => {
              return (
                <>
                  <dt
                    key={space.id}
                    className="w-full p-[4px] rounded-[4px] flex items-center gap-xs"
                  >
                    <div
                      className={`w-[20px] h-[20px] bg-${space.color} rounded-[4px]`}
                    ></div>
                    <p className="font-IranYekan500 text-BodyM">
                      {space.title}
                    </p>
                  </dt>
                  {space.projects?.length ? (
                    space.projects?.map((project) => {
                      return (
                        <dd
                          key={project.id}
                          className="w-[246px] mr-[28px] px-[6px] py-[4px] rounded-[4px]"
                        >
                          <p className="font-IranYekan500 text-BodyM">
                            {project.title}
                          </p>
                        </dd>
                      );
                    })
                  ) : (
                    <button className="w-full min-h-[36px] border-[2px] border-Brand-Primary rounded-[8px] font-IranYekan400 text-BodyS text-Brand-Primary flex justify-center items-center">
                      ساختن پروژه جدید
                    </button>
                  )}
                </>
              );
            })}
          </dl>
        </div>
      </details>
    </>
  );
};

export default SidebarWorkSpacesList;