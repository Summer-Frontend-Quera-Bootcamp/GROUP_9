// <======== Code-Files ========> //
import ExitDoorSVG from "../../assets/Icon/ExitDoor.svg";
import "./style.css";

// <======== import Components ========> //
import Button from "../common/Button";

// <======== Hook ========> //

interface ISidebarProps extends React.PropsWithChildren {}

const Sidebar: React.FC<ISidebarProps> = ({ children }): JSX.Element => {
  // ======== Exit Button HandleFunc() ======== //
  // const handleExit = () => {}

  return (
    <aside className="w-[340px] h-full border-l-[0.5px] border-GrayLight bg-inherite fixed right-0 flex flex-col items-start">
      <header className="mt-[40px] mr-[50px] ml-[55px]">
        <h1 className="w-[235px] font-IranYekan800 text-HeadingL">
          کوئرا تسک‌ منیجر
        </h1>
      </header>
      <main className="w-[274px] mainH fixed top-[122px] right-[50px]">
        {children}
      </main>
      <footer className="w-[276px] mx-[32px] fixed bottom-[32px] flex flex-col justify-center gap-s">
        <div className="flex flex-row items-center gap-xs">
          <div
            id="PrifileImage"
            className="w-[36px] h-[36px] bg-Indigo-Secondary rounded-full font-IranYekan400 text-BodyXS text-Indigo-Primary flex justify-center items-center"
          >
            NM
          </div>
          <h2 id="UserName" className="font-IranYekan500 text-BodyM">
            نیلوفر موجودی
          </h2>
        </div>
        <div className="flex flex-row items-center justify-between">
          {/* ======== Dark&light Mode ========
                    <label className="switch">
                        <input type="checkbox"  />
                        <span className="slider round"></span>
                    </label>
                    */}
          <div className="flex flex-row">
            <Button ClassName="flex items-center gap-[4px]">
              <img src={`${ExitDoorSVG}`} />
              <p className="font-IranYekan500 text-BodyM text-[#818181]">
                خروج
              </p>
            </Button>
          </div>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
