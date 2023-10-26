// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import SpaceMoreButton from "./MoreButton";

// <======== Interfaces ========> //

// <======== Constants ========> //
import { ColorList } from "../../../../../../constants/ColorList";
import { InitialState } from "../../../../../../services/features/workspace/workspaceSlice";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../../../services/app/hooks";
import { fetchprojects } from "../../../../../../services/features/workspace/projectsSlice";
import ProjectElement from "../ProjectElement";
import { useDispatch, useSelector } from "react-redux";
import {
  called,
  setId,
} from "../../../../../../services/features/modals/createProjectSlice";
import { RootState } from "../../../../../../services/app/store";
import { Projects } from "../../../../../../interfaces/TaskManager";
import { useNavigate } from "react-router-dom";

// <======== Hooks ========> //

interface IWorkspaceElementProps {
  workspace: InitialState;
}

const WorkspaceElement: React.FC<IWorkspaceElementProps> = ({ workspace }) => {
  const navigate = useNavigate();
  const color = ColorList.get(workspace.color);
  const [projects, setProjects] = useState<Projects[]>([]);
  const dispatch = useAppDispatch();
  const projectsChange = useSelector(
    (state: RootState) => state.projectModal.text
  );
  const projectsDelete = useSelector((state: RootState) => state.project);
  useEffect(() => {
    dispatch(fetchprojects(workspace.id)).then((res) =>
      setProjects(
        res.payload.sort(
          (a: Projects, b: Projects) => Number(a.id) - Number(b.id)
        )
      )
    );
  }, [, projectsChange, projectsDelete]);
  const Dispatch = useDispatch();
  const handleClick = () => {
    Dispatch(setId(workspace.id));
    Dispatch(called());
  };
  const handleSelect = (name: string) => {
    navigate("/taskmanager/listview");
    localStorage.setItem("projectName", name);
  };
  return (
    <>
      <dt
        key={workspace.id}
        className="w-full p-[4px] rounded-[4px] flex items-center gap-xs"
      >
        <div
          className={`w-[20px] h-[20px] ${color?.bgPrimary} rounded-[4px]`}
        ></div>
        <p className="ml-auto font-IranYekan500 text-BodyM">{workspace.name}</p>
        <SpaceMoreButton id={workspace.id} />
      </dt>
      {projects?.length ? (
        projects?.map((project) => {
          return (
            <div onClick={() => handleSelect(String(project.name))}>
              <ProjectElement
                id={workspace.id}
                key={project.id}
                project={project}
              />
            </div>
          );
        })
      ) : (
        <button
          onClick={handleClick}
          className="w-full min-h-[36px] border-[2px] border-Brand-Primary rounded-[8px] font-IranYekan400 text-BodyS text-Brand-Primary flex justify-center items-center hover:bg-Brand-Primary hover:text-White"
        >
          ساختن پروژه جدید
        </button>
      )}
    </>
  );
};

export default WorkspaceElement;
