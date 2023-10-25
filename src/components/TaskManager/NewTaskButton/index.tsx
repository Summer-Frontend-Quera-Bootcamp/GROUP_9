// <======== Assest-Import ========> //
import { useDispatch } from "react-redux";
import { TaskPlusButtonIcon } from "../../../assets/Icons/TaskManager/Layout/TaskPlusButton";
import { ColorList } from "../../../constants/ColorList";
import { showfirstasktmodal } from "../../../services/features/workspace/taskmodalSlice";
import { useAppDispatch } from "../../../services/app/hooks";

// <======== Component-Import ========> //

// <======== Hooks ========> //

const NewTaskBtn: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleclick = () => {
    console.log("clicked");
    dispatch(showfirstasktmodal());
  };

  const color = ColorList.get("Brand");
  return (
    <button
      onClick={handleclick}
      className={`w-[118px] fixed bottom-[30px] left-[50px] ${color?.bgPrimary} ${color?.hover} px-xs py-[12px] rounded-[6px] flex items-center gap-[4px] z-10`}
    >
      {TaskPlusButtonIcon}
      <p className="font-IranYekan800 text-BodyS text-White cursor-pointer">
        تسک جدید
      </p>
    </button>
  );
};

export default NewTaskBtn;
