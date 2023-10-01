import React, {useState} from "react";
import {NoColorIcon} from "../../../assets/Icons/TaskManager/Modals/Share/NoColoreIcon.tsx";
import ColorButton from "./ColorButton";

interface colorInputProps {
    colors: string[];
    height: string;
    hasNoColor: boolean;
}
const ColorInput: React.FC<colorInputProps> = ({colors,height,hasNoColor }) =>
{
    const [selectedColor, setSelectedColor] = useState("Gray");
    return(
        <div className={`flex w-full h-[${height}] gap-[10px] flex-wrap items-center`}>
            {hasNoColor && <button onClick={() => setSelectedColor("Gray")} className={"w-[15px] h-[15px]"}>
                {NoColorIcon}
            </button>}
            {colors?.map((color)=>(<ColorButton color={color} selected={selectedColor} onClick={() => setSelectedColor(color)}/>))}
        </div>
    )
}

export default ColorInput