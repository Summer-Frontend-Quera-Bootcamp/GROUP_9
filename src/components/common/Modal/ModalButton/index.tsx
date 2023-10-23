import React from "react";
interface modalButtonProps{
    title?:string;
    buttonClick?:() => void;
}

const ModalButton: React.FC<modalButtonProps> = ({ title,buttonClick}) => {

    return(
        <button className={"flex justify-center w-[415px] h-[40px] rounded-[6px] p-[10px] bg-Brand-Primary"} onClick={buttonClick}>
            <div className={"font-IranYekan800 text-BoldS text-White text-right"}>
                {title}
            </div>
        </button>
    )
}
export default ModalButton