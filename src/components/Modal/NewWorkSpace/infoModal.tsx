import React from "react";
import ModalLayout from "../modalLayout.tsx";

interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    workSpaceName:string;
    color:string;
    buttonClick:() => void;
    handleBack: () => void;
}

const InfoModal: React.FC<modalProps> = ({ isOpen, onClose, workSpaceName,color, handleBack, buttonClick }) => {
    if (!isOpen) return null;

    return (
        <ModalLayout activeModal={3} title={"مرور اطلاعات "} onClose={onClose} isOpen={isOpen} isSlide={true} width={"501"} height={"369"} backButton={true} buttonTitle={"ساختن ورک‌اسپیس"} handleBack={handleBack} buttonClick={buttonClick}>
            <div className={"flex flex-col font-IranYekan800 BoldS w-[453px] h-[169px] flex flex-row gap-s border-[0.5px] border-[#AAAAAA] py-[16px] px-[12px] rounded-[8px] gap-s"}>
                <div className={"w-[429px] h-[34px] flex flex-row justify-between"}>
                    <div> نام ورک‌اسپیس </div>
                    <div> {workSpaceName} </div>
                </div>
                <div className={"w-[429px] h-[34px] flex flex-row justify-between"}>
                    <div> رنگ ورک‌اسپیس </div>
                    <div className={`w-[15px] h-[15px] rounded-[2px] bg-${color}-Primary`}> </div>
                </div>
                <div className={"w-[429px] h-[34px] flex flex-row justify-between"}>
                    <div> اعضا </div>
                    <div className={"w-[36px] h-[37px] rounded-[100px] bg-Red-Primary"}> </div>
                </div>
            </div>
        </ModalLayout>
    )
}
export default InfoModal