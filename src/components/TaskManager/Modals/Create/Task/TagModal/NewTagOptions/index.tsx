//import React from 'react'
interface INewTagOptions {
  url: string;
  text: string;
}
const NewTagOptions = ({ url, text }: INewTagOptions) => {
  return (
    <div className="cursor-pointer flex gap-[4px] font-IranYekan400 text-Black text-[12px]">
      <img src={url} alt="icon" />
      <div>{text}</div>
    </div>
  );
};

export default NewTagOptions;
