// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./Sidebar";

// <======== Hooks ========> //


const ProfilePage: React.FC = (): JSX.Element => {
  return (
    <>
      <ProfileSidebar />
      <main className="w-[354px] fixed top-[105.5px] right-[398px] flex flex-col gap-l items-start">
        <Outlet/>
      </main>
    </>
  );
};

export default ProfilePage;
