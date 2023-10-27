// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Modal from "../../../CommonModal";

// <======== Interfaces ========> //

// <======== Constants ========> //
import { ColorList } from "../../../../../../constants/ColorList";
import ColorInput from "../../../../../common/ColorInput";

// <======== Hooks ========> //
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../services/app/hooks";
import {
  closemodal,
  showfirstmodal,
  steptwo,
} from "../../../../../../services/features/workspace/workspacemodalSlice";
import { RootState } from "../../../../../../services/app/store";

const NewSpaceModalColorSelection: React.FC = (): JSX.Element => {
  const visible = useSelector((state: RootState) => state.workspacemodal.modaltwo);
  const dispatch = useDispatch();
  const Dispatch = useAppDispatch();
  const [picked, setPicked] = useState("");
  const color_ = useSelector((state: RootState) => state.workspacemodal.color);
  const [divColor, setDivColor] = useState<string | undefined>("bg-[#7D828C]");
  const pullColor = (color: string) => {
    setDivColor(ColorList.get(color)?.bgPrimary);
    setPicked(color)
  };
  const color = ColorList.get("Brand");

  const handleCreate = () => {
    dispatch(steptwo(picked));
  };

  const handleback = () => {
    dispatch(showfirstmodal());
  };

  const handleclose = () => {
    dispatch(closemodal());
  };

  return (
    <Modal
      title="انتخاب رنگ ورک‌اسپیس"
      visibility={visible}
      isBackButton={true}
      handleclick={() => handleback()}
      close={() => handleclose()}
    >
      <main className="w-full flex flex-col justify-center items-center gap-xl">
        <div className="w-full flex gap-s justify-start items-start">
          <div
            className={`w-[70px] h-[70px] rounded-[8px] ${divColor} font-IranYekan800 text-[24px] text-White flex justify-center items-center`}
          >
            ت ط
          </div>
          <div className="w-[293px] flex flex-col gap-s">
            <p className="font-IranYekan400 text-[14px]">رنگ ورک‌اسپیس‌</p>
            <div className="flex flex-wrap gap-[10px] items-center">
              <ColorInput isNoColorButton={true} func={pullColor} />
            </div>
          </div>
        </div>
        <button
          onClick={handleCreate}
          className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
        >
          ادامه
        </button>
      </main>
    </Modal>
  );
};
export default NewSpaceModalColorSelection;
