import React from "react";
import {PrimaryModalCloseButtonIcon} from "../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton.tsx";
import {ModalArrowLeftButtonIcon} from "../../../../assets/Icons/CommonComponents/Modal/ModalArrowLeftButton.tsx";
interface modalTitleProps{
    title:string;
    backButton:boolean;
    onClose: ()  => void;
    handleBack:() => void;
}
const ModalTitle: React.FC<modalTitleProps> = ({title,backButton, onClose, handleBack}) => {

    return(
        <div className={"w-[452px] h-[32px] flex justify-between"}>
            <button className={"w-[24px] h-[24px] text-HeadingM"} onClick={onClose}>
                {PrimaryModalCloseButtonIcon}
            </button>
            <div className={"font-IranYekan800 text-HeadingS text-center  gap-xl"}>
                {title}
            </div>
            {!backButton && <div className={"w-[24px] h-[24px]"}> </div>}
            {backButton && <button onClick={handleBack} className={"w-[24px] h-[24px] text-center text-[#323232]"}>
                {ModalArrowLeftButtonIcon}
            </button>}
        </div>
    )
}
export default ModalTitle