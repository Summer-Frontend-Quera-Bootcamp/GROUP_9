import React, {useEffect, useState} from "react";


import Modal from "../../../../../common/Modal";
import ColorInput from "../../../../../common/ColorInput";
interface modalProps{
    isOpen: boolean;
    onClose: ()  => void;
    buttonClick:() => void;
    handleBack:() => void;
    colors: string[];
}
const ChooseColorModal: React.FC<modalProps> = ({ isOpen, onClose ,buttonClick , handleBack, colors}) => {
    const [selectedColor, setSelectedColor] = useState("Gray");
    useEffect(() => {
        setSelectedColor("bg-Gray-Primary");
    }, [isOpen]);
    if (!isOpen) return null;
    const handleColorButtonClick = (color: string) => {
        setSelectedColor(color); // تغییر مقدار selectedColor به رنگ انتخاب شده
    };

    return (
        <Modal activeModal={2} hasButton={true} title={"انتخاب رنگ ورک‌اسپیس "} onClose={onClose} isOpen={isOpen} isSlide={true} width={"501"} height={"290"} backButton={true} buttonTitle={"ادامه"} buttonClick={buttonClick} handleBack={handleBack} >
            <div className={"w-[453px] h-[90px] flex flex-row gap-s"}>
                <div className={`flex justify-center items-center w-[70px] h-[70px] rounded-[8px] font-IranYekan800 text-HeadingS text-White
                    ${selectedColor === null ? 'bg-Gray-Primary' : `${selectedColor}` }`}>
                    ت ط
                </div>
                <div className={"flex flex-col gap-s"}>
                    <div className={"flex font-IranYekan400"}>
                        {"رنگ ورک‌اسپیس"}
                    </div>
                    <div className={"flex w-[293px] h-[50px] gap-[10px] flex-wrap items-center"}>
                        <ColorInput colors={colors} height={"50px"} hasNoColor={true} selectedColor={selectedColor} onColorButtonClick={handleColorButtonClick} />
                    </div>
                </div>
            </div>
        </Modal>
    )
}
export default ChooseColorModal