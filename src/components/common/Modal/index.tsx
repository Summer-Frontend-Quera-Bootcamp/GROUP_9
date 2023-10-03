import React from "react";
import ModalTitle from "./ModalTitle";
import ModalButton from "./ModalButton";
interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    children: React.ReactNode;
    title:string;
    isSlide:boolean;
    width:string;
    height:string
    backButton:boolean;
    buttonTitle:string;
    buttonClick:() => void;
    handleBack:() => void;
    activeModal:number;
    hasButton:boolean;
}
const Modal: React.FC<modalProps> = ({ activeModal, isOpen, onClose, title,children,isSlide,width,height,backButton,hasButton, buttonTitle,buttonClick, handleBack }) => {
    if (!isOpen) return null;
    return(
        <>
            <div className="opacity-70 fixed inset-[0px] z-40 bg-Black"></div>
            <div className={"h-screen w-screen flex flex-col justify-center items-center fixed outline-none focus:outline-none inset-[0px] z-50"}>
                <div className={"bg-White p-m w-["+ width +"px] h-["+height+"px] rounded-[8px] border-2 flex flex-col items-center gap-xl relative"}>
                    <div className={" flex items-center flex-col gap-xl"}>
                        <ModalTitle title={title} backButton={backButton} onClose={onClose} handleBack={handleBack}/>
                        {children}
                    </div>
                    {hasButton && <ModalButton title={buttonTitle} buttonClick={buttonClick}/>}
                </div>
                {isSlide && <div className={"flex w-[500px] h-[48px] justify-center items-end"}>
                    <div className={"flex flex-row w-[40px] h-[8px] gap-xs"}>
                        <div className={`w-[8px] h-[8px] rounded-full ${
                            activeModal === 3 ? 'bg-White' : 'bg-Gray-Primary'
                        }`}> </div>
                        <div className={`w-[8px] h-[8px] rounded-full ${
                            activeModal === 2 ? 'bg-White' : 'bg-Gray-Primary'
                        }`}> </div>
                        <div className={`w-[8px] h-[8px] rounded-full ${
                            activeModal === 1 ? 'bg-White' : 'bg-Gray-Primary'
                        }`}> </div>
                    </div>
                </div>}
            </div>
        </>
    )
}
export default Modal