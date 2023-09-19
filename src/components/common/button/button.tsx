import React from 'react';
import '../../../index.css'; 


interface Iprops{
    text:string;
}


const Btn:React.FC<Iprops>=({text}):JSX.Element=>{
    return (
        <button dir='rtl' className='w-full h-[48px] rounded-md p-[10px] bg-btn text-white'>{text}</button>
    )
}

export default Btn