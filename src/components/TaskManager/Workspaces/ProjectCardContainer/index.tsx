// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectCard from "../ProjectCard";
import NewProjectCard from "../NewProjectCard";

// <======== Intefaces ========> //
import { Projects, Workspaces } from "../../../../interfaces/TaskManager";

// <======== Hooks ========> //
import { useAppDispatch } from "../../../../services/app/hooks";
import { useEffect, useState } from "react";
import { fetchprojects } from "../../../../services/features/workspace/projectsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../services/app/store";
import { useNavigate } from "react-router-dom";

interface IProjectCardContainer {
  workspace: Workspaces;
}

const ProjectCardContainer = ({ workspace }: IProjectCardContainer) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [projects, setProjects] = useState<Projects[]>([]);
  const projectsChange = useSelector(
    (state: RootState) => state.projectModal.text
  );
  const projectsDelete = useSelector((state: RootState) => state.project);
  useEffect(() => {
    dispatch(fetchprojects(workspace.id)).then((e) =>
      setProjects(
        e.payload.sort(
          (a: Projects, b: Projects) => Number(a.id) - Number(b.id)
        )
      )
    );
  }, [, projectsChange, projectsDelete]);
  const handleSelect = (name: string) => {
    navigate("/taskmanager/listview");
    localStorage.setItem("projectName", name);
  };
  return (
    <>
      <header className="font-IranYekan800 text-[24px] text-Gray-Darker">
        {workspace.name}
      </header>
      <main className="flex gap-l items-start">
        {projects?.length ? (
          projects?.map((item: Projects) => {
            return (
              <div onClick={() => handleSelect(String(item.name))}>
                <ProjectCard
                  key={item.id}
                  project={item}
                  workspaceColor={String(workspace.color)}
                />
              </div>
            );
          })
        ) : (
          <NewProjectCard
            workSpaceId={Number(workspace.id)}
            workspaceColor={String(workspace.color)}
          />
        )}
      </main>
    </>
  );
};

export default ProjectCardContainer;
