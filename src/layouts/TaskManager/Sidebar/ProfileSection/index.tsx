import Profile from "../../../../components/common/MembersCard/Profile";

const ProfileSection: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-xs cursor-pointer">
      <Profile />
      <h2 className="font-IranYekan500 text-BodyM cursor-pointer">{`${localStorage.getItem("first_name")} ${localStorage.getItem("last_name")}`}</h2>
    </div>
  );
};

export default ProfileSection;
