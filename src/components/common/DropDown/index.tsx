import React, {useEffect, useRef, useState} from "react";
import {OptionArrowBottomIcon} from "../../../assets/Icons/CommonComponents/DropDown/OptionArrowBottom.tsx";
import {FilterSearchIcon} from "../../../assets/Icons/TaskManager/Modals/Filter/FilterSearchIcon.tsx";
import Selection from "./Selection";

interface selection  {
    title:string;
    subtitle:string;
}
interface dropDownProps {
    defaultSelect: string;
    selectionOptions?: selection[];
    hasSearch:boolean;
    hasSubTitle:boolean;
    width?:string;
    searchPlaceHolder?:string;
}
const  DropDown: React.FC<dropDownProps> = ({defaultSelect,selectionOptions,hasSearch, hasSubTitle,width,searchPlaceHolder}):JSX.Element => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSelect,setIsSelect] = useState(defaultSelect)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const handleChoose = (option:string) =>
    {
        setIsOpen(false)
        setIsSelect(option)
    }
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return(
        <div className={`flex flex-col cursor-pointer ${width}`} ref={dropdownRef}>
            <div className={`w-auto flex flex-row h-[30px] rounded-[6px] border-[1px] pt-[5px] pr-[8px] pb-[4px] pl-[8px] border-[#E9EBF0] gap-[10px]`}>
                <div onClick={() => setIsOpen(!isOpen)} className={`w-max grow h-[21px] font-IranYekan400 text-xs text-BoldXS text-right `}>
                    {isSelect}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className={"w-[18px] h-[18px]"}>
                    {OptionArrowBottomIcon}
                </button>
            </div>
            {(isOpen) && (
                <div className={`mt-[30px] z-10 fixed w-auto  max-h-[210px] max-w-[252px] overflow-y-auto`}>
                    <div className={`w-auto flex flex-col gap-[10px] bg-White p-[16px] overflow-y-auto`}>
                        {hasSearch && <div className={"w-auto h-[33px] gap-[4px] flex flex-row justify-items-start"}>
                            <div className={"w-auto h-[20px]"}>
                                {FilterSearchIcon}
                            </div>
                            <div className={"w-auto h-[21px] font-IranYekan400 text-BodyXS text-right"}>
                                <input placeholder={searchPlaceHolder}/>
                            </div>
                        </div>}
                        {selectionOptions && selectionOptions.map((option) => (
                            <button onClick={() => handleChoose(option.title)} className={"flex flex-col w-auto h-auto gap-[8px] hover:bg-Brand-Primary"}>
                                <Selection hasSubTitle={hasSubTitle} option={option}/>
                            </button>
                        ))}
                    </div>
                 </div>
            )}
        </div>
    )
}
export default DropDown