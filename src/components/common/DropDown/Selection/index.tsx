import React from "react";
interface selection  {
    title:string;
    subtitle:string;
}
interface selectionProps {
    hasSubTitle: boolean;
    option:selection;
}
const Selection:React.FC<selectionProps> = ({hasSubTitle,option}) =>
{
    return(
        <>
            <div className={"font-IranYekan800 text-right text-BoldXS"}>
                {option.title}
            </div>
            {hasSubTitle && <div className={"w-auto"}>
                <div className={"font-IranYekan400 text-right text-BoldXS"}>
                    {option.subtitle}
                </div>
            </div>}
            <div className={"w-auto border-[1px] border-[#F4F4F4]"}> </div>
        </>
    )
}
export default Selection