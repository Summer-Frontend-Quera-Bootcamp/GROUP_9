// <======== Assest-Import ========> //
import { TaskPlusButtonIcon } from "../../../assets/Icons/TaskManager/Layout/TaskPlusButton";


const NewTaskBtn: React.FC = (): JSX.Element => {
    return (
        <button className="w-[118px] fixed bottom-[30px] left-[50px] bg-Brand-Primary px-xs py-[12px] rounded-[6px] flex items-center gap-[4px] z-10">
            {TaskPlusButtonIcon}
            <p className="font-IranYekan800 text-BodyS text-White cursor-pointer">
              تسک جدید
            </p>
        </button>
    )
}

export default NewTaskBtn;