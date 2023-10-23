import Modal from "../../../common/Modal";
import React from "react";
import EmailInput from "./EmailInput";
import ShareLink from "./ShareLink";
import PreviousShared from "./PreviousShared";

interface selection  {
    title:string;
    subtitle:string;
}
interface shareModalProps {
    isOpen: boolean;
    onClose: () => void;
    title:string;
    accounts: string[];
    projects?:selection[];
    sharedType:string;
}
const ShareModal: React.FC<shareModalProps> = ({isOpen, onClose, title,accounts,projects,sharedType}) =>
{

    return(
        <Modal onClose={onClose} isOpen={isOpen} activeModal={0} height={"348"} width={"470"} hasButton={false} title={title} isSlide={false} backButton={false} buttonTitle={""} >
            <div className={"w-auto h-auto flex flex-col gap-m"}>
                <EmailInput/>
                <ShareLink/>
                <PreviousShared accounts={accounts} projects={projects} sharedType={sharedType} />
            </div>
        </Modal>
    )
}
export default ShareModal