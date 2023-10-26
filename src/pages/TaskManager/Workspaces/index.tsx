import "./index.css";
//import { workspaces } from "../../../constants";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCardContainer from "../../../components/TaskManager/Workspaces/ProjectCardContainer";

// <======== Hooks ========> //
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../services/app/hooks";
import { fetchworkspace } from "../../../services/features/workspace/workspaceSlice";
import { Workspaces } from "../../../interfaces/TaskManager";
import { useSelector } from "react-redux";
import { RootState } from "../../../services/app/store";

const WorkspacesPage = () => {
  const dispatch = useAppDispatch();
  const workspaceslist = useSelector((state: RootState) => state.workspace);
  const [workspaces, setWorkspaces] = useState<Workspaces[]>([]);
  useEffect(() => {
    dispatch(fetchworkspace()).then((e) =>
      setWorkspaces(
        e.payload.sort(
          (a: Workspaces, b: Workspaces) => Number(a.id) - Number(b.id)
        )
      )
    );
  }, [, workspaceslist]);
  return (
    <div className="WHWorkspaces fixed right-[340px] py-[64px] pr-l overflow-x-hidden overflow-y-scroll">
      {workspaces?.map((item: Workspaces) => (
        <div
          key={item.id}
          className="pl-[50px] py-l first:pt-[0px] last:pb-[0px] border-b-2 border-Gray-Secondary last:border-none flex flex-col gap-l justify-center items-start overflow-x-scroll"
        >
          <ProjectCardContainer workspace={item} />
        </div>
      ))}
    </div>
  );
};

export default WorkspacesPage;
