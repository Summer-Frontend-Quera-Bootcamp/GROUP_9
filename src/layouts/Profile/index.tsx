// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProfileSidebar from "./Sidebar";

// <======== Hooks ========> //

interface IProfileProps extends React.PropsWithChildren {}

const Profile: React.FC<IProfileProps> = ({ children }): JSX.Element => {
  return (
    <>
      <ProfileSidebar />
      <main className="w-[354px] fixed top-[105.5px] right-[398px] flex flex-col gap-l items-start">
        {children}
      </main>
    </>
  );
};

export default Profile;
