// <======== Component-Files ========> //

import React from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
interface Iprops{
  text:string;
  color:string;
  options?:boolean;
  Addtask?:()=>void;
  Setting?:()=>void;
}

const Status:React.FC<Iprops> = ({text,color,options=false,Addtask,Setting}):JSX.Element=> {

  function toPersianDigits(number_:number):string {
    const arabicDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  
    return String(number_).replace(/\d/g, function(match) {
      return persianDigits[arabicDigits.indexOf(match)];
    });
  }
  console.log(color)
  const color_class = `border-${color}-Primary w-[250px] h-[44px] rounded-2xl bg-White border-t-2 box-border flex flex-row-reverse items-center justify-between shadow-xl`

  return (
    <div className={color_class}>
      <div  className="flex flex-row-reverse items-center justify-start mr-[10px]">
           <h1 className="font-IranYekan500 text-BodyM text-Black">{text}</h1>
           <p className="font-IranYekan400 text-BodyXS text-Black mr-[3px]">{toPersianDigits(0)}</p>
    
      </div>
      {options &&

        <div className="w-[48px] h-[24px]  ml-[10px] flex flex-row justify-evenly items-center">
        <BiDotsHorizontalRounded onClick={Setting} />
        <AiOutlinePlus onClick={Addtask}/>
        </div>

      }
    </div>
  );
};

export default Status;
