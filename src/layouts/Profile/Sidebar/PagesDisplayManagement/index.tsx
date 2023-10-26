import { NavLink } from "react-router-dom";
import { ColorList } from "../../../../constants/ColorList";
import { ProfileInformationIcon } from "../../../../assets/Icons/Profile/ProfileInformation";
import { AccountInformationIcon } from "../../../../assets/Icons/Profile/AccountInformation";
import { SettingIcon } from "../../../../assets/Icons/Profile/SettingIcon";

const ProfilePagesDisplayManagement: React.FC = (): JSX.Element => {
  const Pages = [
    {
      name: "userinformatiton",
      title: "اطلاعات فردی",
      icon: ProfileInformationIcon
    },
    {
      name: "accountinformation",
      title: "اطلاعات حساب",
      icon: AccountInformationIcon
    },
    {
      name: "setting",
      title: "تنظیمات",
      icon: SettingIcon
    },
  ];
  const color = ColorList.get("Brand");
  return (
    <div className="w-[266px] flex flex-col gap-l items-start">
      {Pages.map((item) => {
        return (
          <NavLink
            to={`/profile/${item.name}`}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive
                  ? `${color?.secondaryColorCode}`
                  : "white",
                fontFamily: isActive ? "IRANYekanExtraBold" : "IRANYekanMedium",
                width: "100%",
                borderRadius: "4px"
              };
            }}
          >
            <div className="h-xl px-xs py-[4px] text-[20px] flex gap-[11px] items-center">
                {item.icon}
                {item.title}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ProfilePagesDisplayManagement;
