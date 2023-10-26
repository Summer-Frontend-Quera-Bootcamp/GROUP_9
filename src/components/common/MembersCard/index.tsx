// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Profile from "./Profile";

// <======== Intefaces ========> //
import { Members } from "../../../interfaces";

// <======== Hooks ========> //

interface IMembersCardProps {
  MembersList: Members[] | undefined;
}

const MembersCard: React.FC<IMembersCardProps> = ({
  MembersList,
}): JSX.Element => {
  return (
    <div className="w-full h-[36px] flex justify-center items-center">
      {MembersList?.map((member) => {
        return <Profile key={member.userID} Member={member} />;
      })}
    </div>
  );
};

export default MembersCard;
