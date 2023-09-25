// <======== Component-Files ========> //
import Button from "../../../../components/common/Button";
import MainLayout from "../../Layout";

const BoardView = () => {
  return (
    <MainLayout page="BoardView">
        <main className="w-full h-full mr-[340px] overflow-x-scroll overflow-y-hidden">
            <Button
              ClassName="fixed top-[185px] right-[356px] w-[250px] h-[44px] py-8 px-12 rounded-[16px] flex items-center bg-white shadow-md border-gray-300"
            >
              <p className="font-IranYekan800 text-BodyS text-white cursor-pointer s-[16px] gap-[4px] h-[28px] w-[125px]">
                + ساختن برد جدید
              </p>
            </Button>
        </main>
    </MainLayout>
  );
};

export default BoardView;