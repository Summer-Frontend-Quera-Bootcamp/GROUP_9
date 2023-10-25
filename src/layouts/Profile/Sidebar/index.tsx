// <======== Assest-Import ========> //
import { RightArrowButtonIcon } from "../../../assets/Icons/Profile/RightArrowButton";

// <======== Component-Import ========> //

// <======== Constants ========> //
import { ColorList } from "../../../constants/ColorList";

// <======== Hooks ========> //
import { Link } from "react-router-dom";
import ProfilePagesDisplayManagement from "./PagesDisplayManagement";


const ProfileSidebar: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand");
  return (
    <aside className="w-[340px] h-full border-l-[0.5px] border-GrayLight bg-inherite fixed right-0 flex flex-col items-start">
      <header className="mt-[40px] mr-[50px] ml-[55px]">
        <h1 className="w-[235px] font-IranYekan800 text-HeadingL">
          کوئرا تسک‌ منیجر
        </h1>
      </header>
      <main className="w-[266px] fixed top-[170px] right-[50px] flex flex-col gap-[43px] justify-start items-start">
        <Link to={"/taskmanager"}>
          <button
            className={`px-xs py-[4px] rounded-[8px] ${color?.bgPrimary} font-IranYekan500 text-White text-[20px] flex gap-xs justify-end items-center cursor-pointer`}
          >
            {RightArrowButtonIcon}
            بازگشت
          </button>
        </Link>
        <ProfilePagesDisplayManagement />
      </main>
    </aside>
  );
};

export default ProfileSidebar;
