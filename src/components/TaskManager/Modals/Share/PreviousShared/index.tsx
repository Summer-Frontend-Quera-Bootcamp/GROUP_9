import React from "react";
import DropDown from "../../../../common/DropDown";

interface selection  {
    title:string;
    subtitle:string;
}
interface previousSharedProps{
    accounts: string[];
    projects?: selection[];
    sharedType: string;
}
const accessOptions:selection[] = [
    {title:"دسترسی کامل", subtitle:"توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه"},
    {title:"دسترسی ویرایش",subtitle:"توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد."},
    {title:"دسترسی کامنت",subtitle:"توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد."},
    {title:"فقط دسترسی مشاهده",subtitle:"توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد."}
]
const  PreviousSharedProject:React.FC<previousSharedProps> = ({accounts, sharedType,projects}) =>
{
    return(
    <div className={"w-[430px] h-auto flex flex-col gap-s"}>
        <div className={"w-[131px] h-[24px] font-IranYekan400 text-BodyS text-sm text-[#7D828C] text-center"} >
            اشتراک‌گذاشته شده با
        </div>
        <div className={"w-[430px] h-[37px] flex justify-center items-center justify-between"}>
            <div className={"w-[185px] h-full gap-[12px] flex justify-center items-center"}>
                <div className={"flex w-[59px] h-full gap-[7px] justify-center items-center"}>
                    <div className={"w-[34px] h-full rounded-[100px] pt-[9px] pr-[8px] pb-[7px] pl-[9px] bg-Red-Primary"}> </div>
                    <div className={"text-BodyS font-IranYekan400 text-right text-sm "}> من </div>
                </div>
                <div className={"w-[114px] h-[29px] rounded-[6px] py-[4px] px-[8px] gap-[10px] bg-Blue-Secondary flex justify-center items-center"}>
                    <div className={"text-BodyXS font-IranYekan400 text-xs text-Blue-Primary"}>مالک ورک‌اسپیس</div>
                </div>
            </div>
            <div className={"w-[89px] h-[30px] rounded-[6px] border-[1px] pt-[5px] pr-[8px] pb-[4px] pl-[8px] border-[#E9EBF0]"}>
                <div className={"w-[73px] h-[21px]font-IranYekan400 text-xs text-BoldXS text-right"}>
                    دسترسی کامل
                </div>
            </div>
        </div>
        {accounts.map((account)=>(
            <div className={"w-[430px] h-[37px] flex justify-between justify-center items-center "}>
                <div className={"h-full gap-[12px] flex justify-center items-center"}>
                    <div className={"w-[34px] h-full rounded-[100px] pt-[9px] pr-[8px] pb-[7px] pl-[9px] bg-Red-Primary"}> </div>
                    <div className={"text-BodyS font-IranYekan400 text-sm text-BoldXS text-right"}> {account} </div>
                </div>
                <div className={"flex flex-row-reverse gap-[4px] w-[227px] h-[30px]"}>
                    {(sharedType === "space") &&<DropDown defaultSelect={"همه پروژه‌ها"} selectionOptions={projects} hasSearch={false} hasSubTitle={true}/>}
                    <DropDown defaultSelect={"دسترسی کامل"} selectionOptions={accessOptions} hasSearch={false} hasSubTitle={true} />
                </div>
            </div>
            ))
        }
    </div>
    )
}
export default PreviousSharedProject