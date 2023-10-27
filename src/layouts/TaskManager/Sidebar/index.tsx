import "./index.css";

// <======== Assest-Import ========> //
import { ExitDoorIcon } from "../../../assets/Icons/TaskManager/Layout/Sidebar/ExitDoor";

// <======== Component-Import ========> //
import ProfileSection from "./ProfileSection";
import WorkSpacesSummary from "./WorkspacesSummary";
import { useNavigate } from "react-router-dom";

// <======== Hooks ========> //

const Sidebar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Login");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user_name");
    localStorage.removeItem("id");
  };
  return (
    <aside className="w-[340px] h-full border-l-[0.5px] border-GrayLight bg-inherite fixed right-0 flex flex-col items-start">
      <header
        onClick={() => navigate("/taskmanager")}
        className="mt-[40px] mr-[50px] ml-[55px] cursor-pointer"
      >
        <h1 className="cursor-pointer w-[235px] font-IranYekan800 text-HeadingL">
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
            <button
              onClick={handleLogout}
              className="flex items-center gap-[4px] cursor-pointer"
            >
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
