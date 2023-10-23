import {LinkIcon} from "../../../../../assets/Icons/TaskManager/Modals/Task/Information/CommentInput/LinkIcon.tsx";
const ShareLink= () =>
{
    return(
        <div className={"w-full h-[26px] flex justify-between "}>
            <div className={"flex w-[111px] h-[24px] justify-between"}>
                <div className={"w-[20px] h-[20px]"}>
                    {LinkIcon}
                </div>
                <div className={"w-[83px] h-[24px] text-BodyS font-IranYekan400 text-sm text-right"}>
                    لینک خصوصی
                </div>
            </div>
            <button className={"w-[74px] h-full rounded-[6px] border-[1px] pt-[3px] pr-[12px] pb-[2px] pl-[12px] border-[#E9EBF0]"}>
                <div className={"w-[50px] h-[21px] font-IranYekan400 text-BodyXS text-xs"}>
                    کپی لینک
                </div>
            </button>
        </div>
    )
}
export default ShareLink