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

            <header className='flex flex-row-reverse w-[1280px] h-[50px] items-center absolute left-[50%] translate-x-[-50%] mr-auto top-[80px]'>
                <button className='w-[95px] h-[40px] bg-brand-primary rounded-md p-2.5 text-white font-family:"IranYekan" mr-2.5 text-[14px] font-extrabold leading-[24.18px]'>{btn}</button>
                <h2 className='ml-[10px] font-family:IranYekan text-[16px] font-medium leading-[27.68px] text-black h-[28px]'>{text}</h2>
                <h1 className='ml-auto h-[55px] text-right font-extrabold text-[32px]  bg-gradient-to-r from-one to-two bg-clip-text text-three leading-[55.27px]' >کوئرا تسک منیجر</h1>
            </header>
            {children}
            <div className='custom-clip z-10 w-full h-[574px] absolute bg-gradient-to-r from-two to-one top-[300px]'></div>

        </main>
    )
}

export default Background