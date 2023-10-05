//import React from 'react'

import { OptionArrowBottomIcon } from "../../../../../../assets/Icons/CommonComponents/DropDown/OptionArrowBottom";
import GrayBorderButton from "../GrayBorderButton";
interface IPeople {
  owner?: boolean;
  email: string;
}

const People = ({ owner, email }: IPeople) => {
  return (
    <div className="h-[37px] flex justify-between items-center">
      <div className="h-fit flex items-center gap-[7px]">
        {owner ? (
          <>
            <div className="w-[34px] h-[37px]">
              <img
                className="w-full h-full rounded-full"
                src="src\assets\Images\sampleProfilePicture.png"
                alt="profile"
              />
            </div>
            <div className="h-full">من</div>
            <div className="flex items-center w-fit h-[29px] font-IranYekan400 text-[12px] rounded-[6px] mr-[12px] px-xs bg-Blue-Secondary text-Blue-Primary">
              Workspace Owner
            </div>
          </>
        ) : (
          <>
            <div className="w-[34px] h-[37px]">
              <div className="w-full h-full rounded-full bg-Red-Primary flex items-center justify-center">
                {email.charAt(0) + email.charAt(1)}
              </div>
            </div>
            <div className="h-full">{email}</div>
          </>
        )}
      </div>
      {owner ? (
        <GrayBorderButton padding="8px">دسترسی کامل</GrayBorderButton>
      ) : (
        <GrayBorderButton padding="8px">
          دسترسی کامل<div>{OptionArrowBottomIcon}</div>
        </GrayBorderButton>
      )}
    </div>
  );
};

export default People;
