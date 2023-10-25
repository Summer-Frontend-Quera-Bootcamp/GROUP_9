// <======== Assest-Import ========> //
import WorkspacePlusButton from "../../../../assets/Icons/TaskManager/Pages/Workspaces/NewWorkspaceButton";

// <======== Component-Import ========> //

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //
import { useDispatch } from "react-redux";
import {
  called,
  setId,
} from "../../../../services/features/modals/createProjectSlice";
interface INewProjectCard {
  workspaceColor: string;
  workSpaceId: number;
}

const NewProjectCard = ({ workspaceColor, workSpaceId }: INewProjectCard) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setId(workSpaceId));
    dispatch(called());
  };
  const color = ColorList.get(workspaceColor);
  return (
    <>
      <div
        onClick={handleClick}
        className={`shadow-projectCart bg-gradient-to-l ${color?.gradient} flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px]`}
      >
        <div className="h-full w-full bg-White rounded-[12px] flex gap-[4px] justify-center items-center cursor-pointer">
          <WorkspacePlusButton itemColor={color?.name} />
          <p
            className={`cursor-pointer font-IranYekan800 text-BoldM ${color?.textPrimary}`}
          >
            ساختن پروژه جدید
          </p>
        </div>
      </div>
    </>
  );
};

export default NewProjectCard;
