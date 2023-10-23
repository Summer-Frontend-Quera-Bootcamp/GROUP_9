import React from "react";
import ShareModal from "../index.tsx";
interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;

}
const ShareProjectModal: React.FC<ShareModalProps> = ({isOpen,onClose}) =>
{
    const accounts = ["a@gmail.com","b@gmail.com"];

    return(
        <ShareModal isOpen={isOpen} onClose={onClose} title={"به اشتراک‌گذاری پروژه‌"} accounts={accounts} sharedType={"project"} />
    )
}

export default ShareProjectModal