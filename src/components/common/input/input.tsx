import React from 'react';
import '../../../index.css'; 
import { FieldErrors, UseFormRegister } from 'react-hook-form';


interface Iprops{
    type:string;
    name_:string;
    text:string;
    hook:UseFormRegister<any>;
    errors:FieldErrors<any>
}


const Input:React.FC<Iprops>=({type ,name_,text,hook,errors}):JSX.Element=>{
    return (
       <div className='flex flex-col space-y-[2px] h-[72px]'>
       <label htmlFor={type} className='font-normal font-[14px] text-right leading-[24.18px] font-family:IranYekan '>{text}</label>
       <input dir='rtl' type={type} {...hook(name_)} id={name_} className='w-full h-[40px] rounded-md bg-white border border-br text-br p-[5px] '/>
       {errors[name_] && ( 
       <p className='text-red-secondary'>{errors[name_].message}</p>
        )}
       </div>
    )
}

export default Input