// <======== Code-Files ========> //
import Arrow from "../../../assets/icone/Arrow.svg";
// <======== Component-Files ========> //
import MainLayout from "../../Layout/index";

const ListView = () => {
  return (
    <MainLayout page="ListView">
      <details className="w-full h-full mr-[364px] mt-[28px] overflow-y-scroll overflow-x-hidden">
        <summary className=" hug top-[198px] left-[1008px] w-[76px] h-[32px] gap-[8px] flex items-center">
          <img src={Arrow} />
          <p className="text-black font-IranYekan800 text-HeadingXS leading-8 marker:content-[''] cursor-pointer">
            پروژه
          </p>
        </summary>
      </details>
    </MainLayout>
  );
};

export default ListView;
