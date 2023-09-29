// import { useState } from "react";

interface IAvatarDotted {
  url: string;
}

const AvatarDotted = ({ url }: IAvatarDotted) => {
  url;

  return (
    <div className="w-full h-full cursor-pointer flex justify-center items-center border border-[#C1C1C1] border-dashed rounded-full ">
      <img src={url} alt="icon" />
    </div>
  );
};

export default AvatarDotted;
