// <======== Assest-Import ========> //

// <======== Component-Import ========> //

// <======== Intefaces ========> //
import { Projects } from "../../../../interfaces";

// <======== Constants ========> //
import { ColorList } from "../../../../constants/ColorList";

// <======== Hooks ========> //


interface IProjectCardProps {
  project: Projects;
  workspaceColor: string;
}

const ProjectCard = ({ project, workspaceColor }: IProjectCardProps) => {
  const color = ColorList.get(workspaceColor);
  return (
    <>
      <div
        className={`shadow-projectCart bg-gradient-to-l ${color?.gradient} flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3 rounded-[16px]`}
      >
        <p className="font-IranYekan800 text-BoldM text-White">
          {project.title}
        </p>
      </div>
    </>
  );
};

export default ProjectCard;
