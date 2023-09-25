
// <======== Component-Files ========> //
import Button from "../../../../components/common/Button";


const BoardView = () => {
  return (
    <>
      <div className="w-[1038px] h-[30px] gap-[20px] ">
        <Button
          ClassName="w-[250px] h-[44px] py-8 px-12 rounded-[16px] flex justify-between items-center
    bg-white shadow-md border-gray-300"
        >
          <p className="font-IranYekan800 text-BodyS text-white cursor-pointer s-[16px] gap-[4px] h-[28px] w-[125px]">
            + ساختن برد جدید
          </p>
        </Button>
      </div>
    </>
  );
};

export default BoardView;
