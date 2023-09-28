import React, {useEffect, useState} from "react";
import ModalLayout from "../modalLayout.tsx";
import ColorButton from "./colorButton.tsx";
interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    buttonClick:() => void;
    handleBack:() => void;
}
const ChooseColorModal: React.FC<modalProps> = ({ isOpen, onClose ,buttonClick , handleBack}) => {
    const [selectedColor, setSelectedColor] = useState("Gray");
    useEffect(() => {
        setSelectedColor("Gray");
    }, [isOpen]);
    if (!isOpen) return null;
    return (
        <ModalLayout activeModal={2} title={"انتخاب رنگ ورک‌اسپیس "} onClose={onClose} isOpen={isOpen} isSlide={true} width={"501"} height={"290"} backButton={true} buttonTitle={"ادامه"} buttonClick={buttonClick} handleBack={handleBack} >
            <div className={"w-[453px] h-[90px] flex flex-row gap-s"}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[8px] font-IranYekan800 text-HeadingS text-White
                    ${selectedColor === null ? 'bg-Gray-Primary' : `bg-${selectedColor}-Primary` }`}>
                    ت ط
                </div>
                <div className={"flex flex-col gap-s"}>
                    <div className={"flex font-IranYekan400"}>
                        {"رنگ ورک‌اسپیس"}
                    </div>
                    <div className={"flex w-[293px] h-[50px] gap-[10px] flex-wrap items-center"}>
                        <button onClick={() => setSelectedColor("Gray")} className={"w-[15px] h-[15px]"}>
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.5" cy="8" r="7" stroke="black"/>
                                <line x1="12.3536" y1="2.85355" x2="2.35355" y2="12.8536" stroke="black"/>
                            </svg>
                        </button>
                        <ColorButton color={"Indigo"} selected={selectedColor} onClick={() => setSelectedColor('Indigo')}/>
                        <ColorButton color={"Blue"} selected={selectedColor} onClick={() => setSelectedColor('Blue')}/>
                        <ColorButton color={"Cyan"} selected={selectedColor} onClick={() => setSelectedColor('Cyan')}/>
                        <ColorButton color={"Teal"} selected={selectedColor} onClick={() => setSelectedColor('Teal')}/>
                        <ColorButton color={"Brand"} selected={selectedColor} onClick={() => setSelectedColor('Brand')}/>
                        <ColorButton color={"Green"} selected={selectedColor} onClick={() => setSelectedColor('Green')}/>
                        <ColorButton color={"Lime"} selected={selectedColor} onClick={() => setSelectedColor('Lime')}/>
                        <ColorButton color={"Orange"} selected={selectedColor} onClick={() => setSelectedColor('Orange')}/>
                        <ColorButton color={"Red"} selected={selectedColor} onClick={() => setSelectedColor('Red')}/>
                        <ColorButton color={"Pink"} selected={selectedColor} onClick={() => setSelectedColor('Pink')}/>
                        <ColorButton color={"Grape"} selected={selectedColor} onClick={() => setSelectedColor('Grape')}/>
                        <ColorButton color={"Violet"} selected={selectedColor} onClick={() => setSelectedColor('Violet')}/>
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}
export default ChooseColorModal