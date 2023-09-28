import React from "react";
import ModalLayout from "../modalLayout.tsx";


interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    buttonClick: () => void;
    handleBack:() => void;
}
const NewProjectModal: React.FC<modalProps> = ({ isOpen, onClose , buttonClick, handleBack }) => {
    if (!isOpen) return null;
    return(
        <ModalLayout activeModal={2} title={"انتخاب رنگ ورک‌اسپیس "} onClose={onClose} isOpen={isOpen} isSlide={true} width={"501"} height={"290"} backButton={true} buttonTitle={"ادامه"} buttonClick={buttonClick} handleBack={handleBack}  >

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
        </ModalLayout>
    )
}
export default NewProjectModal