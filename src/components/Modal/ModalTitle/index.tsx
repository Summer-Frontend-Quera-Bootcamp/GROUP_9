import React from "react";
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L16 16" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 8L8 16" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div className={"font-IranYekan800 text-HeadingS text-center  gap-xl"}>
                {title}
            </div>
            {!backButton && <div className={"w-[24px] h-[24px]"}> </div>}
            {backButton && <button onClick={handleBack} className={"w-[24px] h-[24px] text-center text-[#323232]"}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.01001 11.98H19" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.013 5.988L4.00195 12L10.013 18.012" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>}
        </div>
    )
}
export default ModalTitle