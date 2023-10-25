// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Intefaces ========> //
import { Members } from "../../../../interfaces";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //

interface IProfileProps {
  Member: Members;
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
  const color = ColorList.get(Member.userColor);

  const userNameList = Member.userName.split(" ");
  const letter_one = userNameList[0].charAt(0);
  const letter_two = userNameList[1].charAt(0);
  return (
    <div
      className={`${width} h-full ml-[-8px] last:ml-[0px] pt-[9px] pb-[7px] px-xs rounded-full ${color?.bgSecondary} flex justify-center items-center`}
    >
      {Member.userImage?.length ? (
        <img src={Member.userImage} />
      ) : (
        <p className={`${fontWeight} ${fontSize} ${color?.textPrimary}`}>
          {`${letter_one}${letter_two}`}
        </p>
      )}
    </div>
  );
};

export default Profile;
