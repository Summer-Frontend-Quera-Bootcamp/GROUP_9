import { Members } from "../../../interfaces";
import Profile from "./Profile";

interface IMembersCardProps {
    MembersList: Members[] | undefined;
}

const MembersCard: React.FC<IMembersCardProps> = ({ MembersList }): JSX.Element => {
    return (
        <div className="w-full h-[36px] flex justify-center items-center">
            {MembersList?.map((member) => {
                return (
                    <Profile Member={member}/>
                )
            })}
        </div>
    )
}

export default MembersCard;