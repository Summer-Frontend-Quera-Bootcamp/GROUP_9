import WorkspacePlusButton from "../../../../assets/Icons/TaskManager/Pages/Workspaces/NewWorkspaceButton";
import { ColorList } from "../../../../constants";


interface INewProjectCard {
    workspaceColor: string;
}

let Color: {
    name?: string;
    startColor?: string;
    endColor?: string;
} = {}

const NewProjectCard = ({ workspaceColor }: INewProjectCard) => {
  ColorList.map((item) => {
      if (workspaceColor === item.name) {
        Color = item;
      }    
    })
  return (
    <>
      <div className={`shadow-projectCart bg-gradient-to-l from-[${Color.startColor}] to-[${Color.endColor}] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px]`}>
        <div className="h-full w-full bg-White rounded-[12px] flex gap-[4px] justify-center items-center">
          <WorkspacePlusButton color={Color.name} />
          <p className={`font-IranYekan800 text-BoldM text-${Color.name}`}>
            ساختن پروژه جدید
          </p>
        </div>
      </div>
    </>
  );
};

  export default NewProjectCard;