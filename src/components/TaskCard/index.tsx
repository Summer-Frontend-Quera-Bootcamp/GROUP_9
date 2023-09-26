// <======== Component-Files ========> //
import { useEffect, useState } from "react";
import '../../index.css'
import {BsTextLeft,BsFlag} from 'react-icons/bs'
import {CiSquareCheck} from 'react-icons/ci'
import {FiCheckCircle} from 'react-icons/fi'
import {BiDotsHorizontalRounded} from 'react-icons/bi'




interface Iprops{
  done?:boolean
}


const TaskCard:React.FC<Iprops> = ({done=false}):JSX.Element => {

  return (
    <div dir="rtl" className="w-[250px] h-auto rounded-xl flex flex-col itmes-center justify-center space-y-[20px] shadow-lg pt-[20px] pl-[10px] pr-[10px] pb-[20px]">
          <div className="flex flex-row w-full itmes-center justify-start flex-wrap pl-[10px] pr-[10px]">
            <h2 className="font-IranYekan400 text-BodyXS">پروژه 1</h2>
            <div className="w-[24px] h-[24px] rounded-full bg-Yellow-Secondary font-IranYekan500 text-[8.14px] text-Yellow-Primary mr-auto flex items-center justify-center">
              NM
            </div>
            <h2 className="w-full font-IranYekan400 text-BodyXS flex flex-row gap-[5px] items-center">سلام این تست است <button><BsTextLeft/></button></h2>
          </div>
          <div className="w-full h-[21px] flex flex-row itmes-center justify-start gap-[5px]">
            <BsFlag className="text-Red-Primary"/>
            <h3 className="font-IranYekan400 text-BodyXS flex items-center">5 مهر - فردا</h3>
            <h3 className="flex flex-row items-center font-IranYekan400 text-BodyXS text-GrayLight3"><CiSquareCheck className="w-[16px] h-[16px] ml-[5px]"/>١۲/۲</h3>
          </div>
          <div className="flex items-center justify-start gap-[20px]">
              <div className="h-[24px] min-w-[41px] flex items-center font-IranYekan800 text-BodyXS justify-center rounded-[14px] bg-Grape-Secondary text-Grape-Primary">درس</div>
              <div className="h-[24px] min-w-[41px] flex items-center font-IranYekan800 text-BodyXS justify-center rounded-[14px] bg-Blue-Secondary text-Blue-Primary">پروژه</div>
        
          </div>
          {done &&
            (
              <>
                  <div className="w-[90%] ml-auto mr-auto border border-GrayLight4"></div>
                  <div className="flex flex-row justify-between w-[90%] h-[20px] items-center">
                      <FiCheckCircle className="w-[20px] h-[20px]"/>
                      <BiDotsHorizontalRounded className="w-[20px] h-[20px]"/>
                  </div> 
              </>

            )
          }
    </div>
  );
};

export default TaskCard;
