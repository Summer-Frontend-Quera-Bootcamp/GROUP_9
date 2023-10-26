// <======== Assest-Import ========> //
import { EmergencyPriorityIconXS } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Emergency";
import { HighPriorityIconXS } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/High";
import { IntermediatePriorityIconXS } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Intermediate";
import { LowPriorityIconXS } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Low";
import { NothingPriorityIconXS } from "../../../../assets/Icons/TaskManager/Modals/Task/Common/Priorities/Nothing";
import { DescriptionIcon } from "../../../../assets/Icons/TaskManager/Pages/ListView/Task/Description";

// <======== Component-Import ========> //
import Profile from "../../../common/MembersCard/Profile";

// <======== Intefaces ========> //
import { Tasks } from "../../../../interfaces";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //

interface ITaskProps {
  task: Tasks;
  boardColor: string;
}

const ListViewProjectTask: React.FC<ITaskProps> = ({
  task,
  boardColor,
}): JSX.Element => {
  const color = ColorList.get(boardColor);
  return (
    <tr className="py-[4px] rounded-[4px] flex flex-row gap-[70px] hover:bg-Gray-Secondary">
      <td className="py-[7px] pr-[25px] ml-auto flex gap-[7px] items-start">
        <div className={`w-s h-s ${color?.bgPrimary} rounded-[3px]`}></div>
        <p className="font-IranYekan400 text-BodyXS">{task.title}</p>
      </td>
      <td className="w-[70px] flex justify-center">
        <Profile Member={{username: String(localStorage.getItem("user_name"))}} />
      </td>
      <td className="w-[70px] px-[10px] font-IranYekan400 text-BodyXS flex justify-center items-center">
        {task.deadline}
      </td>
      <td className="w-[70px] px-[10px] flex justify-center items-center">
        {task.priority === "Emergency" && EmergencyPriorityIconXS}
        {task.priority === "High" && HighPriorityIconXS}
        {task.priority === "Intermediate" && IntermediatePriorityIconXS}
        {task.priority === "Low" && LowPriorityIconXS}
        {task.priority === "Nothing" && NothingPriorityIconXS}
      </td>
      <td className="w-[70px] px-[10px] flex justify-center items-center">
        {DescriptionIcon}
      </td>
    </tr>
  );
};

export default ListViewProjectTask;
