import MainLayout from "../../Layout/index";
import Arrow from "../../../assets/Icon/Arrow.svg";

const ListView = () => {
  return (
    <MainLayout page="ListView">
      <details className="w-full h-full mr-[340px] overflow-x-scroll overflow-y-hidden">
        <summary className=" hug top-[198px] left-[1008px] w-[76px] h-[32px] gap-[8px]">
          <img src={Arrow} />
          <p className="text-black font-IranYekan800 text-HeadingXS leading-8 cursor-pointer">
            پروژه
          </p>
        </summary>
      </details>
    </MainLayout>
  );
};

export default ListView;
