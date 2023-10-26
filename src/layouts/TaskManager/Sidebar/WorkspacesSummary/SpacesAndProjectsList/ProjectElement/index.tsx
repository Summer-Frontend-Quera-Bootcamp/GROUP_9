// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ProjectMoreButton from "./MoreButton";

// <======== Interfaces ========> //
import { Projects } from "../../../../../../interfaces/TaskManager/index";

// <======== Hooks ========> //
import { useState } from "react";
import {InitialState} from '../../../../../../services/features/workspace/projectsSlice'
import { current_project, current_workspace } from "../../../../../../services/features/workspace/currentitemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../../services/app/hooks";

interface IProjectElementProps {
  project: InitialState;
  id:number
}

const ProjectElement: React.FC<IProjectElementProps> = ({
  project,
  id
}): JSX.Element => {
  const [moreButton, setMoreButton] = useState(<></>);
  const currentproject = useSelector((state:any)=>state.current.project_id);
  const dispatch = useDispatch();
  const handleMouseOver = () => {
    setMoreButton(
      <>
        <ProjectMoreButton />
      </>
    );
  };
  const handleMouseOut = () => {
    setMoreButton(<></>);
  };
  const handleclick=()=>{
    dispatch(current_workspace(id));
    dispatch(current_project(project.id));
    console.log("current project is : ",currentproject);
  }
  return (
    <dd
      key={project.id}
      onClick={handleclick}
      className="w-[246px] mr-[28px] p-[4px] rounded-[4px] flex items-center hover:bg-[#e5e7ea] cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <p className="ml-auto font-IranYekan500 text-BodyM cursor-pointer">
        {project.name}
      </p>
      {moreButton}
    </dd>
  );
};

export default ProjectElement;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

