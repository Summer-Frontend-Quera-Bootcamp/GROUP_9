import React from "react";
import Modal from "../../../../common/Modal";

interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    buttonClick:() => void;
    handleBack:() => void;

}
const NewSpaceModal: React.FC<modalProps> = ({ isOpen, onClose, buttonClick, handleBack }) => {
    if (!isOpen) return null;

    return (
        <Modal activeModal={1} hasButton={true} title={"ساختن ورک‌اسپیس جدید"} onClose={onClose} isOpen={isOpen} isSlide={true} width={"500"} height={"272"} backButton={false} buttonTitle={"ادامه"} buttonClick={buttonClick} handleBack={handleBack}>
            <div className={"w-[415px] h-[72px] flex flex-col gap-xs"}>
                <div className={"flex font-IranYekan400 "}>
                    {"نام ورک‌اسپیس"}
                </div>
                <div className={"flex justify-center items-center"}>
                    <input className={"w-[415px] h-[40px] rounded-[6px] border-[1px]"} type="text" name="projectName" />
                </div>
            </div>
        </Modal>
    )
}
export default NewSpaceModal