import { useState } from "react";
import ColorInput from "../../../components/common/ColorInput";
import { ColorList } from "../../../constants/ColorList";

const Setting = () => {
  const [selected, setSelected] = useState("Brand");
  const pullColor = (Color: string) => {
    setSelected(Color);
  };
  const handleSubmit = () => {
    localStorage.setItem("theme", selected);
  };
  const color = ColorList.get("Brand");
  return (
    <>
      <header>
        <h2 className="font-IranYekan700 text-[31px]">تنظیمات</h2>
      </header>
      <main className="w-full flex flex-col gap-m items-start">
        <div className="w-full font-IranYekan400 text-[14px] flex flex-col gap-s">
          انتخاب تم
          <div className="flex flex-wrap gap-[12px] items-center">
            <ColorInput func={pullColor} defaultColor={String(localStorage.getItem("theme"))}/>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className={`w-full py-xs px-s rounded-[6px] ${color?.bgPrimary} font-IranYekan800 text-[14px] text-White flex justify-center items-center cursor-pointer`}
        >
          ثبت تغییرات
        </button>
      </main>
    </>
  );
};

export default Setting;
