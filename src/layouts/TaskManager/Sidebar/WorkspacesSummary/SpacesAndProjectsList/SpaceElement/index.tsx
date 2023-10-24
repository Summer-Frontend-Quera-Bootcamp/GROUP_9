// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import SpaceMoreButton from "./MoreButton";

// <======== Interfaces ========> //
import { Workspaces } from "../../../../../../interfaces";

// <======== Constants ========> //
import { ColorList } from "../../../../../../constants/ColorList";
import { InitialState } from "../../../../../../services/features/workspace/workspaceSlice";

// <======== Hooks ========> //


interface IWorkspaceElementProps {
  workspace: InitialState;
}

const WorkspaceElement: React.FC<IWorkspaceElementProps> = ({ workspace }) => {
  const color = ColorList.get(workspace.color)
  return (
    <dt
      key={workspace.id}
      className="w-full p-[4px] rounded-[4px] flex items-center gap-xs"
    >
      <div
        className={`w-[20px] h-[20px] ${color?.bgPrimary} rounded-[4px]`}
      ></div>
      <p className="ml-auto font-IranYekan500 text-BodyM">{workspace.name}</p>
      <SpaceMoreButton/>
    </dt>
  );
};

export default WorkspaceElement;
