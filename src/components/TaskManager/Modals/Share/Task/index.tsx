import React from "react";
import ShareModal from "../index.tsx";
interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;

}
const ShareTaskModal: React.FC<ShareModalProps> = ({isOpen,onClose}) =>
{
    const accounts = ["a@gmail.com","b@gmail.com"];

    return(
        <ShareModal isOpen={isOpen} onClose={onClose} title={"به اشتراک‌گذاری تسک"} accounts={accounts} sharedType={"project"} />
    )
}

export default ShareTaskModal