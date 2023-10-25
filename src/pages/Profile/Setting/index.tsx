import ColorInput from "../../../components/common/ColorInput";
import { ColorList } from "../../../constants/ColorList";
import Profile from "../../../layouts/Profile";

const Setting = () => {
  const pullColor = (color: string) => {
    console.log(color);
  };
  const color = ColorList.get("Brand");
  return (
    <Profile>
      <>
        <header>
          <h2 className="font-IranYekan700 text-[31px]">تنظیمات</h2>
        </header>
        <main className="w-full flex flex-col gap-m items-start">
          <div className="w-full font-IranYekan400 text-[14px] flex flex-col gap-s">
            انتخاب تم
            <div className="flex flex-wrap gap-[12px] items-center">
              <ColorInput func={pullColor} />
            </div>
          </div>
          <button
            className={`w-full py-xs px-s rounded-[6px] ${color?.bgPrimary} font-IranYekan800 text-[14px] text-White flex justify-center items-center cursor-pointer`}
          >
            ثبت تغییرات
          </button>
        </main>
      </>
    </Profile>
  );
};

export default Setting;
