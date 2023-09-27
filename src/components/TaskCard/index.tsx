// <======== Component-Files ========> //
import { useEffect, useState } from "react";
import '../../index.css'
import {BsTextLeft,BsFlag} from 'react-icons/bs'
import {CiSquareCheck} from 'react-icons/ci'
import {FiCheckCircle} from 'react-icons/fi'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import { Label } from "../../api/SpacesAndProjectsData";
import { Member } from "../../api/SpacesAndProjectsData";
import { Tasks } from "../../api/SpacesAndProjectsData";

interface Iprops{
  name:string;
  descroption:string;
  deadline:string;
  priority?:"Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
  members:Member[];
  labels:Label[];
  done?:boolean
}


const TaskCard:React.FC<Iprops> = ({name,descroption,priority="Nothing",deadline,members,labels,done=false}):JSX.Element => {

  return (
    <article dir="rtl" className="w-[230px] h-auto border-0 rounded-xl flex flex-col itmes-center justify-center space-y-[20px] shadow-TaskCard pt-[20px] pl-[10px] pr-[10px] pb-[20px]">
          <div className="flex flex-row w-full itmes-center justify-between flex-wrap pl-[10px] pr-[10px]">
            <h2 className="font-IranYekan400 text-BodyXS">{name}</h2>
            <div className="flex flex-row items-center justify-center"> 
            {members.length!==0 && 
              
              members.map(member=>{
                return (
                  <div className={`w-[24px] h-[24px] rounded-full bg-${member?.Color}-Secondary font-IranYekan500 text-[8.14px] text-${member?.Color}-Primary mr-[10px] flex items-center justify-center`}>
                    {member?.userName.split(" ").map(item=>item[0])}
                  </div>
                )
              })
              }
            </div>
            <h2 className={`w-full font-IranYekan400 text-BodyXS items-center mt-[${descroption?'20px':'0px'}] `}>{descroption && (<>{descroption}<button className="mr-[5px] "><BsTextLeft/></button></>)}</h2>
          </div>

          <div className="w-full h-[21px] flex flex-row itmes-center justify-start gap-[5px]">
            {priority=="Emergency"?(<BsFlag className="text-Red-Primary"/>):priority=="High"?(<BsFlag className="text-Orange-Primary"/>):priority=="Intermediate"?(<BsFlag className="text-Green-Primary"/>):(<BsFlag className="text-Black"/>)}
 
            <h3 className="font-IranYekan400 text-BodyXS flex items-center">{deadline}</h3>
            <h3 className="flex flex-row items-center font-IranYekan400 text-BodyXS text-GrayLight3"><CiSquareCheck className="w-[16px] h-[16px] ml-[5px]"/>١۲/۲</h3>
          </div>
          <div className="flex items-center justify-start gap-[20px]">
              
                  {labels.map(label=>{
                    return(
                      <div className= {`h-[24px] min-w-[41px] flex items-center font-IranYekan800 text-BodyXS justify-center rounded-[14px] bg-${label.color}-Secondary text-${label.color}-Primary`}>{label.content}</div>
                    )
                  })}

        
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
    </article>
  );
};

export default TaskCard;
