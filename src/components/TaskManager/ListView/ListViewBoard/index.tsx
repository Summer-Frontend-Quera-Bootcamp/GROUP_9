// <======== Assest-Import ========> //
import { SmallCircleArrowBottomIcon } from "../../../../assets/Icons/TaskManager/Pages/ListView/SmallArrow";

// <======== Component-Import ========> //
import ListViewProjectTask from "../ListViewTask";

// <======== Intefaces ========> //
import { Boards } from "../../../../interfaces";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //

interface IBoardProps {
  board: Boards;
}

const ListViewProjectBoard: React.FC<IBoardProps> = ({
  board,
}): JSX.Element => {
  const color = ColorList.get(board.color);
  return (
    <table className="flex flex-col gap-[19px] select-none">
      <thead>
        <tr className="flex flex-row gap-[70px]">
          <th className="ml-auto flex gap-xs items-center">
            <div className="flex gap-[5px] items-center">
              {SmallCircleArrowBottomIcon}
              <h4
                className={`px-[6px] py-[4px] rounded-[4px] ${color?.bgPrimary} font-IranYekan400 text-[16px] text-White`}
              >
                {board.title}
              </h4>
            </div>
            <p className="font-IranYekan400 text-BodyXS">
              {`${board.tasks?.length} تسک`}
            </p>
          </th>
          <th className="w-[70px] px-[10px] font-IranYekan400 text-BodyM">
            اعضا
          </th>
          <th className="w-[70px] px-[10px] font-IranYekan400 text-BodyM">
            ددلاین
          </th>
          <th className="w-[70px] px-[10px] font-IranYekan400 text-BodyM">
            اولویت
          </th>
          <th className="w-[70px] font-IranYekan400 text-BodyM">توضیحات</th>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-[11px]">
        {board.tasks?.map((task) => {
          return (
            <ListViewProjectTask
              key={task.id}
              task={task}
              boardColor={board.color}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ListViewProjectBoard;
