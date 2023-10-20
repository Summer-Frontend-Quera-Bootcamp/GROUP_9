// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import SpaceMoreButton from "./MoreButton";

// <======== Interfaces ========> //
import { Workspaces } from "../../../../../../interfaces";

// <======== Hooks ========> //


interface IWorkspaceElementProps {
  workspace: Workspaces;
}

const WorkspaceElement: React.FC<IWorkspaceElementProps> = ({ workspace }) => {
  return (
    <dt
      key={workspace.id}
      className="w-full p-[4px] rounded-[4px] flex items-center gap-xs"
    >
      <div
        className={`w-[20px] h-[20px] bg-${workspace.color} rounded-[4px]`}
      ></div>
      <p className="ml-auto font-IranYekan500 text-BodyM">{workspace.title}</p>
      <SpaceMoreButton/>
    </dt>
  );
};

export default WorkspaceElement;
