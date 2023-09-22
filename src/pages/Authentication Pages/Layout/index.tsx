
import '../../../index.css'; 
import './style.css'


interface Iprops{
    btn:string;
    text:string;
    children: React.ReactNode;

}


const Background:React.FC<Iprops>=({btn,text,children}):JSX.Element=>{
    return (
        <main className="w-screen h-screen overflow-hidden " dir='rtl'>
                <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(270deg, #06846F 0.35%, #54BEE8 103.4%)',
          clipPath: 'polygon(0 65%, 100% 45%, 100% 100%, 0% 100%)',
         
        }}
      ></div>
            <header className='flex  w-full px-[5rem] h-[50px] items-center absolute left-[50%] translate-x-[-50%] mr-auto top-[80px]'>
            <h1 className='ml-auto h-[55px] text-right font-extrabold text-[32px]  bg-gradient-to-r from-one to-two bg-clip-text text-three leading-[55.27px]' >کوئرا تسک منیجر</h1>
            <h2 className='ml-[10px] font-family:IranYekan text-[16px] font-medium leading-[27.68px] text-black h-[28px]'>{text}</h2>

                <button className='w-[95px] h-[40px] bg-brand-primary rounded-md p-2.5 text-white font-family:"IranYekan" mr-2.5 text-[14px] font-extrabold leading-[24.18px]'>{btn}</button>
               
            </header>
            {children}
           
        </main>
    )
}

export default Background