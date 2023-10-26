// <======== Assest-Import ========> //
import { ChangeNameIcon } from "../../../../../../../../assets/Icons/CommonIcon/ChangeName";
import { CopyLinkButtonIcon } from "../../../../../../../../assets/Icons/CommonIcon/CopyLinkIcon";
import { RedRemoveButtonIcon } from "../../../../../../../../assets/Icons/CommonIcon/RedRemoveButton";
import { WhiteShareButtonIcon } from "../../../../../../../../assets/Icons/TaskManager/Layout/Sidebar/Spaces/WhiteShareButton";
import { ColumnPlusButtonIcon } from "../../../../../../../../assets/Icons/TaskManager/Pages/BoardView/ColumnPlusButton";

// <======== Component-Import ========> //

// <======== Constants ========> //
import { ColorList } from "../../../../../../../../constants/ColorList";
import { Projects } from "../../../../../../../../interfaces/TaskManager";

// <======== Hooks ========> //
import { useAppDispatch } from "../../../../../../../../services/app/hooks";
import { deleteproject } from "../../../../../../../../services/features/workspace/projectsSlice";
interface Props {
  id: number;
  workSpaceId: number;
}
const ProjectMoreModal = ({ id, workSpaceId }: Props) => {
  const color = ColorList.get("Brand");
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteproject({ id: workSpaceId, project_id: Number(id) }));
  };
  return (
    <div className="absolute top-[16px] left-[0px] w-[210px] p-[12px] rounded-[8px] shadow-moreModal bg-White flex flex-col gap-s items-start z-20">
      <div className="w-full flex flex-col gap-xs items-start">
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {ColumnPlusButtonIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            ساختن تسک جدید
          </p>
        </div>
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {ChangeNameIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            ویرایش نام پروژه
          </p>
        </div>
        <div className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#F0F1F3] cursor-pointer">
          {CopyLinkButtonIcon}
          <p className="h-[24px] font-IranYekan400 text-BodyS cursor-pointer">
            کپی لینک
          </p>
        </div>
        <div
          onClick={handleDelete}
          className="w-full h-l pl-[12px] pr-[4px] rounded-[8px] flex gap-xs justify-start items-center hover:bg-[#FFE3E3] cursor-pointer"
        >
          {RedRemoveButtonIcon}

          <p className="h-[24px] font-IranYekan400 text-BodyS text-Red-Primary cursor-pointer">
            حذف
          </p>
        </div>
      </div>
      <button
        className={`w-full px-[12px] py-[6px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} flex gap-[4px] justify-start items-center`}
      >
        {WhiteShareButtonIcon}
        <p className="font-IranYekan400 text-BodyXS text-White cursor-pointer">
          اشتراک‌گذاری
        </p>
      </button>
    </div>
  );
};

export default ProjectMoreModal;
