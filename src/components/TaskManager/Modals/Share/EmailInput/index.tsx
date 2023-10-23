import React from "react";
const EmailInput: React.FC = () =>
{
    return (
        <div className={"flex relative w-[430px] h-[40px] rounded-r-[8px] bg-[#F0F1F3] font-IranYekan400"}>
            <input placeholder={"دعوت با ایمیل"} type="email" name="email" className={"w-[339px] bg-[#F0F1F3] rounded-r-[8px] p-[10px]"}/>
            <button className={"w-[91px] h-[40px] bg-Brand-Primary flex items-center justify-center text-White rounded-l-[8px]"}>
                <div className={"text-White text-BodyS text-center"}>
                    ارسال
                </div>
            </button>
        </div>
    )
}
export default EmailInput