import React from "react";
import {NoColorIcon} from "../../../assets/Icons/TaskManager/Modals/Share/NoColoreIcon.tsx";
import ColorButton from "./ColorButton";

interface colorInputProps {
    colors: string[];
    height: string;
    hasNoColor: boolean;
    selectedColor: string;
    onColorButtonClick: (color: string) => void;
}
const ColorInput: React.FC<colorInputProps> = ({colors,height,hasNoColor,selectedColor,onColorButtonClick }) =>
{
    return(
        <div className={`flex w-full h-[${height}] gap-[10px] flex-wrap items-center`}>
            {hasNoColor && <button onClick={() => onColorButtonClick("Gray")} className={"w-[15px] h-[15px]"}>
                {NoColorIcon}
            </button>}
            {colors?.map(color => {
                return (<ColorButton key={color} color={color} selected={selectedColor} onClick={() => onColorButtonClick(color)}/>)})
            }

        </div>
    )
}

export default ColorInput