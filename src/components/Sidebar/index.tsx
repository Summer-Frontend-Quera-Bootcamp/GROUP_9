// <======== Code-Files ========> //
import "../../index.css";
import'./style.css'
import {TbDoorExit} from 'react-icons/tb'

// <======== import Components ========> //


// <======== Hook ========> //
interface IProps extends React.PropsWithChildren {
    Exit:()=>void;
  }

const Sidebar: React.FC<IProps> = ({children,Exit}):JSX.Element=>{
    return (
        <aside className="w-[340px] h-screen bg-white absolute right-0 absolute flex flex-col items-center">
            <h1 className="text-HeadingL w-full text-center font-IranYekan800 mt-[40px] absolute top-[40px] left-1/2 translate-x-[-50%] ">کوئرا تسک منیجر</h1>
            {children}
            <section className="w-[276px] h-[89px] absolute  bottom-[30px] left-1/2 translate-x-[-50%] flex flex-col justify-between">
                <div dir="rtl" className="h-[36px] flex flex-row items-center">
                    <div className="w-[36px] h-[36px] bg-Indigo-Secondary rounded-full font-IranYekan400 text-BodyXS text-Indigo-Primary flex items-center justify-center">NM</div>
                    <h2 dir="rtl" className="font-IranYekan500 text-BodyM mr-[5px]" >
                        نیلوفر فرهادی
                    </h2>
                </div>
                <div className="h-[36px] flex flex-row-reverse items-center justify-between">
                <label className="switch">
                    <input type="checkbox"  />
                    <span className="slider round"></span>
                </label>
                <div  dir="rtl" className="flex flex-row">
                    <button><TbDoorExit className="text-[24px]" onClick={Exit}/></button>
                    <h2>خروج</h2>
                </div>
                </div>
            </section>
        </aside>
    )
};

export default Sidebar;
