// <======== Code-Files ========> //
import "./index.css";
import SearchIcon from "../../assets/Icon/SearchIcon.svg";
import SummaryArrowOpenIcon from "../../assets/Icon/SummaryOpenArrow.svg";
import WorkSpacePlusIcon from "../../assets/Icon/WorkSpacePlusIcon.svg";
import { WorkSpaceList } from "../../api/SpacesAndProjectsData";

// <======== import Components ========> //
import Button from "../common/Button";

interface IProps {
  SpacesList: Array<WorkSpaceList>;
}

const WorkSpaceListSidebar: React.FC<IProps> = ({
  SpacesList,
}): JSX.Element => {
  return (
    <details className="relative h-full overflow-scroll">
      <div className="absolute top-[2px] left-[16px]">
        <img src={SummaryArrowOpenIcon} />
      </div>
      <summary className="w-full font-IranYekan800 text-BoldM marker:content-[''] select-none cursor-pointer">
        ورک‌اسپیس‌ها
      </summary>
      <div className="w-full h-xl mt-s py-xs px-[15px] rounded-[4px] bg-[#F6F7F9] flex gap-[6px]">
        <img src={SearchIcon} />
        <input
          className="w-full bg-[#F6F7F9] outline-none font-IranYekan400 placeholder:font-IranYekan400 placeholder:text-GrayLight2 text-BodyXS placeholder:text-BodyXS"
          placeholder="جستجو کنید ..."
          type="text"
        />
      </div>
      <div className="w-full mt-s flex flex-col gap-s">
        <Button ClassName="w-full h-l bg-[#D3D3D3] rounded-[6px] font-IranYekan400 text-BodyXS flex justify-center items-center gap-[4px]">
          <img src={WorkSpacePlusIcon} />
          ساختن اسپیس جدید
        </Button>
        <dl className="h-full flex flex-col gap-s overflow-scroll">
          {SpacesList?.map((space) => {
            return (
              <>
                <dt
                  key={space.workSpacename}
                  className="w-full p-[4px] rounded-[4px] flex items-center gap-xs"
                >
                  <div
                    className={`w-[20px] h-[20px] bg-${space.color} rounded-[4px]`}
                  ></div>
                  <p className="font-IranYekan500 text-BodyM">
                    {space.workSpacename}
                  </p>
                </dt>
                {space.projectList ? (
                  space.projectList?.map((project) => {
                    return (
                      <dd
                        key={project.projectName}
                        className="w-[246px] mr-[28px] px-[6px] py-[4px] rounded-[4px]"
                      >
                        <p className="font-IranYekan500 text-BodyM">
                          {project.projectName}
                        </p>
                      </dd>
                    );
                  })
                ) : (
                  <Button ClassName="w-full h-[36px] border-[2px] border-Brand-Primary rounded-[8px] font-IranYekan400 text-BodyS text-Brand-Primary flex justify-center items-center">
                    ساختن پروژه جدید
                  </Button>
                )}
              </>
            );
          })}
        </dl>
      </div>
    </details>
  );
};

export default WorkSpaceListSidebar;