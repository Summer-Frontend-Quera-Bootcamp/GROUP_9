import "./index.css";

// <======== Assest-Import ========> //
import { ExitDoorIcon } from "../../../assets/Icons/TaskManager/Layout/Sidebar/ExitDoor";

// <======== Component-Import ========> //
import ProfileSection from "./ProfileSection";
import WorkSpacesSummary from "./WorkspacesSummary";

// <======== Hooks ========> //


const Sidebar: React.FC = (): JSX.Element => {
  return (
    <aside className="w-[340px] h-full border-l-[0.5px] border-GrayLight bg-inherite fixed right-0 flex flex-col items-start">
      <div className="bg-Yellow-Primary bg-Green-Primary bg-Blue-Primary bg-Red-Primary bg-Pink-Primary bg-Grape-Primary bg-Violet-Primary bg-Indigo-Primary bg-Lime-Primary bg-Orange-Primary bg-Cyan-Primary bg-Teal-Primary bg-Brand-Primary color-Yellow-Primary color-Green-Primary color-Blue-Primary color-Red-Primary color-Pink-Primary color-Grape-Primary color-Violet-Primary color-Indigo-Primary color-Lime-Primary color-Orange-Primary color-Cyan-Primary color-Teal-Primary color-Brand-Primary"></div>
      <header className="mt-[40px] mr-[50px] ml-[55px]">
        <h1 className="w-[235px] font-IranYekan800 text-HeadingL">
          کوئرا تسک‌ منیجر
        </h1>
      </header>
      <main className="w-[274px] mainH fixed top-[122px] right-[50px]">
        <WorkSpacesSummary />
      </main>
      <footer className="w-[276px] mx-[32px] fixed bottom-[32px] flex flex-col justify-center gap-s">
        <ProfileSection />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row">
            <button className="flex items-center gap-[4px] cursor-pointer">
              {ExitDoorIcon}
              <p className="font-IranYekan500 text-BodyM text-[#818181] cursor-pointer">
                خروج
              </p>
            </button>
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
