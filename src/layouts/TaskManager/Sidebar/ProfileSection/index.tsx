import { useNavigate } from "react-router-dom";
import Profile from "../../../../components/common/MembersCard/Profile";
import store from "../../../../services/app/store";

const ProfileSection: React.FC = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/profile/userinformatiton")} className="flex flex-row items-center gap-xs cursor-pointer">
      <Profile
        Member={{
          username: store.getState().user.userName
            ? store.getState().user.userName
            : localStorage.user_name,
        }}
      />
      <h2 className="font-IranYekan500 text-BodyM cursor-pointer">
        {store.getState().user.fullName
          ? store.getState().user.fullName
          : store.getState().user.userName
          ? store.getState().user.userName
          : localStorage.user_name}
      </h2>
    </div>
  );
};

export default ProfileSection;
