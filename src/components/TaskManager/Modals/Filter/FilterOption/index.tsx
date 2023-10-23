import DropDown from "../../../../common/DropDown";
import React from "react";
import {TrashCan} from "../../../../../assets/Icons/CommonComponents/DropDown/TrashCan.tsx";
interface selection  {
    title:string;
    subtitle:string;
}
const isOrNot:selection[] = [
    {
        title:"است",
        subtitle:""},
    {
        title:"نیست",
        subtitle:""
    }
]

const where:selection[] = [
    {
        title:"تاریخ",
        subtitle:""
    },
    {
        title:"تگ",
        subtitle:""
    },
    {
        title:"اعضا",
        subtitle:""
    },
    {
        title:"اولویت",
        subtitle:""
    }
]
const FilterOption:React.FC = () =>
{
    return(
        <div className={"w-[667.35px] h-[30px] flex items-center justify-between "}>
            <div className={"font-IranYekan400 text-BodyS text-center"}>
                تسک هایی که
            </div>
            <DropDown selectionOptions={where} width={"w-[182px]"} defaultSelect={"انتخاب کنید"} hasSearch={true} hasSubTitle={false} searchPlaceHolder={"جستجو بین فیلتر‌ها"}/>
            <div className={"font-IranYekan400 text-BodyS text-center"}>
                آن ها
            </div>
            <DropDown selectionOptions={where} width={"w-[148px]"} defaultSelect={"انتخاب کنید"} hasSearch={true} hasSubTitle={false} searchPlaceHolder={"جستجو"}/>
            <DropDown selectionOptions={isOrNot} width={"w-[107px]"} defaultSelect={isOrNot[0].title} hasSearch={false} hasSubTitle={false}/>
            <button className={"h-[19.35]px h-[19.35px]"}>
                {TrashCan}
            </button>
        </div>
    )
}

export default FilterOption