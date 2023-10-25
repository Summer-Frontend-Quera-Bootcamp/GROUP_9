// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Intefaces ========> //
import { Projects } from "../../../../interfaces/TaskManager";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //
import { useEffect, useState } from "react";
interface IProjectCardProps {
  project: Projects;
  workspaceColor: string;
}

const ProjectCard = ({ project, workspaceColor }: IProjectCardProps) => {
  const [color, setColor] = useState<any>();
  useEffect(() => {
    setColor(
      workspaceColor === "Green"
        ? ColorList.get("Green")
        : ColorList.get("Blue")
    );
  }, []);
  return (
    <>
      <div
        className={`shadow-projectCart bg-gradient-to-l ${color?.gradient} flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] rounded-[16px] cursor-pointer`}
      >
        <p className="font-IranYekan800 text-BoldM text-White cursor-pointer">
          {project.name}
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
