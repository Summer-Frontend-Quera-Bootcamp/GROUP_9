import React, {Fragment} from "react";

interface testProps{
    color:string;
    selected:string;
    onClick: () => void;
}
const ColorButton: React.FC<testProps> = ({selected, color, onClick}) =>
{
    return(
        <Fragment>
            {selected === color ? <button className={`w-[28px] h-[28px] rounded-[8px] bg-${color}-Primary relative`}>
                    <div className={"w-[12px] h-[12px] bg-White rounded-[10px] top-[8px] left-[8px] absolute"}> </div>
                </button> :
                <button onClick={onClick}
                        className={`w-[20px] h-[20px] rounded-[8px] bg-${color}-Primary relative`}> </button>}
        </Fragment>

    )


}
export default ColorButton