import { Members } from "../../../../interfaces";

interface IProfileProps {
    Member: Members;
}

const Profile: React.FC<IProfileProps> = ({ Member }): JSX.Element => {
    const userNameList = Member.userName.split(" ")
    const letter_one = userNameList[0].charAt(0)
    const letter_two = userNameList[1].charAt(0)
    return (
        <div className={`w-[36px] h-full ml-[-8px] last:ml-[0px] pt-[9px] pb-[7px] px-xs rounded-full bg-${Member.userColor}-Secondary flex justify-center items-center`}>
            {Member.userImage?.length 
                ? (<img src={Member.userImage} />) 
                : (
                    <p className={`font-IranYekan400 text-BodyXS text-${Member.userColor}-Primary`}>
                        {`${letter_one}${letter_two}`}
                    </p>
                )
            }
        </div>
    )
}

export default Profile;