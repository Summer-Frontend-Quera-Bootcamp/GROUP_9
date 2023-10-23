// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Modal from "../../../CommonModal";
import Profile from "../../../../../common/MembersCard/Profile";

// <======== Interfaces ========> //

// <======== Constants ========> //
import { ColorList } from "../../../../../../constants/ColorList";
import { workspaces } from "../../../../../../constants";

// <======== Hooks ========> //


const NewSpaceModalReview: React.FC = (): JSX.Element => {
  const color = ColorList.get("Brand");
  const workspaceName = "تیم طراحی";
  const workspaceColor = ColorList.get("Lime");
  const member = workspaces[0].members[0];
  return (
    <Modal title="مرور اطلاعات" visibility="invisible" isBackButton={true}>
      <main className="w-full flex flex-col justify-center items-center gap-xl">
        <div className="w-full px-[12px] py-s border-[0.5px] border-[#AAA] rounded-[8px] flex flex-col gap-s justify-center items-start">
          <div className="w-full h-[34px] flex justify-between items-center">
            <p className="font-IranYekan800 text-[14px]">نام ورک‌اسپیس</p>
            <p className="font-IranYekan800 text-[14px]">{workspaceName}</p>
          </div>
          <div className="w-full h-[34px] flex justify-between items-center">
            <p className="font-IranYekan800 text-[14px]">رنگ ورک‌اسپیس</p>
            <div
              className={`w-[15px] h-[15px] rounded-[2px] ${workspaceColor?.bgPrimary}`}
            ></div>
          </div>
          <div className="w-full h-[34px] flex justify-between items-center">
            <p className="font-IranYekan800 text-[14px]">اعضا</p>
            <Profile Member={member} />
          </div>
        </div>
        <button
          className={`w-full h-xl p-[10px] rounded-[6px] ${color?.bgPrimary} ${color?.hover} font-IranYekan800 text-[14px] text-White flex justify-center items-center`}
        >
          ساختن ورک‌اسپیس
        </button>
      </main>
    </Modal>
  );
};
export default NewSpaceModalReview;
