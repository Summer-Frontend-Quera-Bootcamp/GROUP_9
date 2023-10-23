import React from "react";
import {PrimaryModalCloseButtonIcon} from "../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton.tsx";
import FilterOption from "./FilterOption";
interface filterModalProps {
    isOpen: boolean;
    onClose: ()  => void;
}
const FilterModal:React.FC<filterModalProps> = ({isOpen,onClose}) =>
{
    const addFilter = () =>
    {
        
    }
    if (!isOpen) return null;
    return(
        <>
            <div className="opacity-70 fixed inset-[0px] z-40 bg-Black "> </div>
            <div className={"h-screen w-screen flex flex-col justify-center items-center fixed outline-none focus:outline-none inset-[0px] z-50  overflow-y-auto"}>
                <div className={"w-[718px] h-[206px] rounded-[8px] flex flex-col items-center bg-White"}>
                    <div className={"w-[673px] h-[32px] mt-[15px] mx-[24px] flex justify-between"}>
                        <div className={"font-IranYekan800 text-HeadingS text-center gap-xl"}>
                            فیلترها
                        </div>
                        <button className={"w-[24px] h-[24px] text-HeadingM"} onClick={onClose}>
                            {PrimaryModalCloseButtonIcon}
                        </button>
                    </div>
                    <div className={"h-auto mt-[19px] flex flex-col gap-m"}>
                        <FilterOption />
                        <button onClick={addFilter} className={"font-IranYekan800 text-right text-BoldXS text-Brand-Primary text-xs leading-5 "}>
                            افزودن فیلتر جدید
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default FilterModal