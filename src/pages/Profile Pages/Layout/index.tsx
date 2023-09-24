import Button from "../../../components/common/Button";
import ArrowLeftSVG from "../../../assets/Icon/ArrowRight.svg"

interface ILayoutProfileProps {
  title: "اطلاعات فردی" | "اطلاعات حساب" | "تنظیمات";
  isPersonalInfo?: boolean;
  isAccountInfo?: boolean;
  isSetting?: boolean;
}

const LayoutProfilePage: React.FC<ILayoutProfileProps> = (
  title,
  isPersonalInfo = false,
  isAccountInfo = false,
  isSetting = false,
): JSX.Element => {
  return (
    <main>
      <aside className="fixed right-0 w-[340px] h-full pt-[40px] pr-[50px] border-[#AAA] border-l-[0.5px] flex flex-col items-start">
        <h1 className="font-IranYekan800 text-HeadingL">کوئرا تسک‌منیجر</h1>
        <Button ClassName="h-[43px] py-[4px] px-xs mt-[75px] rounded-[8px] bg-Brand-Primary flex justify-center items-center gap-xs">
            <img src={`${ArrowLeftSVG}`} className="w-m h-m"/>
            <p className="font-IranYekan500 text-BodyL text-White cursor-pointer">بازگشت</p>
        </Button>
        <section className="w-[266px] mt-[36px] flex flex-col items-center gap-l">{/* title ... */}</section>
      </aside>
      <section className="w-[354px] pt-[170px] mr-[398px] flex flex-col gap-l">
        <header className="font-IranYekan700 text-[31px]"></header>
        {/* // ================ Personal Information Page ================ // */}
        {isPersonalInfo && (
            <main className="flex gap-l">
                <section className="flex gap-s">
                    <div id="profile-image" className="w-[100px] h-[100px] rounded-[285px] bg-Yellow-Secondary font-IranYekan500 text-[35px] text-Yellow-Primary flex justify-center items-center">
                        NM
                    </div>
                    <div className="w-[213px] flex flex-col items-center gap-s">
                        <Button ClassName="p-[10px] border border-Brand-Primary rounded-[8px] font-IranYekan500 text-BodyL text-Brand-Primary">ویرایش تصویر پروفایل</Button>
                        <p className="font-IranYekan400 text-BodyXS text-Gray-Primary">این تصویر برای عموم قابل نمایش است.</p>
                    </div>
                </section>
                <article className="flex flex-col gap-s">
                    {/* ============ Coding... ============ */}
                </article>
            </main>
        )}
        {/* // ================ Account Information Page ================ // */}
        {isAccountInfo && (
            <main>
                {/* AccountInfo Code ... */}
            </main>
        )}
        {/* // ================ Setting Page ================ // */}
        {isSetting && (
            <main>
                {/* Setting code... */}
            </main>
        )}
        <footer className="h-xl">
            <Button ClassName="w-full h-full py-[8px] px-[12px] rounded-[6px] bg-Brand-Primary font-IranYekan800 text-BoldS text-White">ثبت تغییرات</Button>
        </footer>
      </section>
    </main>
  );
};

export default LayoutProfilePage;
