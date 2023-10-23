import React from "react";
import ShareModal from "../index.tsx";
interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface selection  {
    title:string;
    subtitle:string;
}
const ShareWorkspaceModal: React.FC<ShareModalProps> = ({isOpen,onClose}) =>
{
    const accounts = ["a@gmail.com","b@gmail.com"];
    const projects:selection[] = [
        {title:"همه پروژه‌ها",subtitle:" "},
        {title:"پروژه اول",subtitle:" "},
        {title:"پروژه دوم",subtitle:" "},
        {title:"پروژه سوم",subtitle:" "}
    ]

    return(
        <ShareModal isOpen={isOpen} onClose={onClose} title={"به اشتراک‌گذاری اسپیس"} accounts={accounts} projects={projects} sharedType={"space"} />
    )
}

export default ShareWorkspaceModal