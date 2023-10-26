// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Intefaces ========> //
import { Account } from "../../../../interfaces/Account";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //

interface IProfileProps {
  Member: Account;
  width?: "w-[100px]" | "w-[36px]";
  fontSize?: "text-[35px]" | "text-BodyXS";
  fontWeight?: "font-IranYekan500" | "font-IranYekan400";
}

const Profile: React.FC<IProfileProps> = ({
  Member,
  width = "w-[36px]",
  fontSize = "text-BodyXS",
  fontWeight = "font-IranYekan400",
}): JSX.Element => {
  const color = ColorList.get(String(localStorage.theme));
  return (
    <div
      className={`${width} h-full mr-[-8px] first:ml-[0px] pt-[9px] pb-[7px] px-xs rounded-full ${color?.bgSecondary} flex justify-center items-center`}
    >
      {Member?.thumbnail ? (
        <img src={Member.thumbnail} />
      ) : (
        <p className={`${fontWeight} ${fontSize} ${color?.textPrimary}`}>
          {`${Member.username?.charAt(0)} ${Member.username?.charAt(1)}`}
        </p>
      )}
    </div>
  );
};

export default Profile;
