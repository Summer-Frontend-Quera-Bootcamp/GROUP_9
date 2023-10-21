import React from "react";
import Modal from "../../../../common/Modal";

interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    buttonClick: () => void;
    handleBack:() => void;
}
const NewProjectModal: React.FC<modalProps> = ({ isOpen, onClose , buttonClick, handleBack }) => {
    if (!isOpen) return null;
    return(
        <Modal activeModal={0} title={"ساختن پروژه جدید"} onClose={onClose} isOpen={isOpen} isSlide={false} width={"501"} height={"290"} backButton={false} buttonTitle={"ادامه"} hasButton={true} buttonClick={buttonClick} handleBack={handleBack}  >

            <div className={"w-[415px] h-[72px] flex flex-col gap-xs"}>
                <div className={"flex w-[51px] h-[24px] font-IranYekan400 text-BodyS text-right"}>
                    {"نام پروژه"}
                </div>
                <div className={"flex justify-center items-center"}>
                    <input className={"w-[415px] h-[40px] rounded-[6px] border-[1px] border-[#AAAAAA]"}
                           type="text"
                           name="projectName"
                           id={"projectName"}/>
                </div>
            </div>
        </Modal>
    )
}
export default NewProjectModal