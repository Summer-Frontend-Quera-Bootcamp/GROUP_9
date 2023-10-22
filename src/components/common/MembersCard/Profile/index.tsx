// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Intefaces ========> //
import { Members } from "../../../../interfaces";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //


interface IProfileProps {
  Member: Members;
}

const Profile: React.FC<IProfileProps> = ({ Member }): JSX.Element => {
  const color = ColorList.get(Member.userColor);

  const userNameList = Member.userName.split(" ");
  const letter_one = userNameList[0].charAt(0);
  const letter_two = userNameList[1].charAt(0);
  return (
    <div
      className={`w-[36px] h-full ml-[-8px] last:ml-[0px] pt-[9px] pb-[7px] px-xs rounded-full ${color?.bgSecondary} flex justify-center items-center`}
    >
      {Member.userImage?.length ? (
        <img src={Member.userImage} />
      ) : (
        <p
          className={`font-IranYekan400 text-BodyXS ${color?.textPrimary}`}
        >
          {`${letter_one}${letter_two}`}
        </p>
      )}
    </div>
  );
};

export default Profile;
