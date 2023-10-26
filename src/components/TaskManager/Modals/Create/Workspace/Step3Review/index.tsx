// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Modal from "../../../CommonModal";
import Profile from "../../../../../common/MembersCard/Profile";

// <======== Interfaces ========> //

// <======== Constants ========> //
import { ColorList } from "../../../../../../constants/ColorList";
import { workspaces } from "../../../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../services/app/hooks";
import { closemodal, reset, showsecondmodal } from "../../../../../../services/features/workspace/workspacemodalSlice";
import { fetchworkspace, newworkspace } from "../../../../../../services/features/workspace/workspaceSlice";
import { Account } from "../../../../../../interfaces/Account";

// <======== Hooks ========> //


const NewSpaceModalReview: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const Dispatch = useAppDispatch();
  const workspace = useSelector(state=>state.workspace);
  const visible = useSelector(state=>state.workspacemodal.modalthree);
  const color = ColorList.get("Brand");
  const workspaceName =useSelector(state=>state.workspacemodal.name);
  const workspaceColor = useSelector(state=>state.workspacemodal.color);

  const handleCreate=()=>{
    dispatch(newworkspace({name:workspaceName,color:workspaceColor}));
    dispatch(fetchworkspace());
    dispatch(closemodal());
    console.log("workspace is : ",workspace)
}

const handleback=()=>{
  dispatch(showsecondmodal());
}

const handleclose=()=>{
  dispatch(closemodal());
}

  return (
    <Modal title="مرور اطلاعات" visibility={visible} isBackButton={true} handleclick={()=>handleback()} close={()=>handleclose()}>
      <main className="w-full flex flex-col justify-center items-center gap-xl">
        <div className="w-full px-[12px] py-s border-[0.5px] border-[#AAA] rounded-[8px] flex flex-col gap-s justify-center items-start">
          <div className="w-full h-[34px] flex justify-between items-center">
            <p className="font-IranYekan800 text-[14px]">نام ورک‌اسپیس</p>
            <p className="font-IranYekan800 text-[14px]">{workspaceName}</p>
          </div>
          <div className="w-full h-[34px] flex justify-between items-center">
            <p className="font-IranYekan800 text-[14px]">رنگ ورک‌اسپیس</p>
            <div
              className={`w-[15px] h-[15px] rounded-[2px] bg-${workspaceColor}-Primary`}
            ></div>
          </div>
          <div className="w-full h-[34px] flex justify-between items-center">
            <p className="font-IranYekan800 text-[14px]">اعضا</p>
            <Profile Member={{username: String(localStorage.getItem("user_name"))}} />
          </div>
        </div>
        <button
          onClick={handleCreate}
          className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
        >
          ساختن ورک‌اسپیس
        </button>
      </main>
    </Modal>
  );
};
export default NewSpaceModalReview;
