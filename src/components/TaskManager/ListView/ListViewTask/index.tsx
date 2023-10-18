import { Tasks } from "../../../../interfaces";
// <======== Assest-Import ========> //
import { EmergencyPriorityIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Emergency";
import { HighPriorityIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/High";
import { IntermediatePriorityIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Intermediate";
import { LowPriorityIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Low";
import { NothingPriorityIcon } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Nothing";
import { DescriptionIcon } from "../../../../assets/Icons/TaskManager/Pages/ListView/Task/Description";
import MembersCard from "../../../common/MembersCard";

// <======== Component-Import ========> //

// <======== Hooks ========> //


interface ITaskProps {
    task: Tasks;
    boardColor: string;
}

const ListViewProjectTask: React.FC<ITaskProps> = ({ task, boardColor }): JSX.Element => {
    return (
        <tr className="flex flex-row gap-[70px]">
            <td className="py-[7px] pr-[25px] ml-auto flex gap-[7px] items-start">
                <div className={`w-s h-s bg-${boardColor} rounded-[3px]`}></div>
                <p className="font-IranYekan400 text-BodyXS">{task.title}</p>
            </td>
            <td className="w-[70px]">
                <MembersCard MembersList={task.members}/>
            </td>
            <td className="w-[70px] px-[10px] font-IranYekan400 text-BodyXS flex justify-center items-center">
                {task.deadline}
            </td>
            <td className="w-[70px] px-[10px] flex justify-center items-center">
                {task.priority === "Emergency" && EmergencyPriorityIcon}
                {task.priority === "High" && HighPriorityIcon}
                {task.priority === "Intermediate" && IntermediatePriorityIcon}
                {task.priority === "Low" && LowPriorityIcon}
                {task.priority === "Nothing" && NothingPriorityIcon}
            </td>
            <td className="w-[70px] px-[10px] flex justify-center items-center">
                {DescriptionIcon}
            </td>
        </tr>
    )
}

export default ListViewProjectTask;