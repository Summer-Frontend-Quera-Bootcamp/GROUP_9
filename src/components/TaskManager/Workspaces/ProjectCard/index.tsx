import { ColorList } from "../../../../constants";
import { Projects } from "../../../../interfaces";

interface IProjectCardProps {
  project: Projects;
  workspaceColor: string;
}

let Color: {
    name?: string;
    startColor?: string;
    endColor?: string;
} = {}

const ProjectCard = ({ project, workspaceColor }: IProjectCardProps) => {
  ColorList.map((color) => {
    if (workspaceColor === color.name) {
      Color = color;
      console.log(Color)
    }    
  })
  return (
    <>
        <div className={`shadow-projectCart bg-gradient-to-l from-[${Color.startColor}] to-[${Color.endColor}] flex justify-center w-[200px] h-[80px] items-center mx-auto py-[26px] w-3 h-3 rounded-[16px]`}>
            <p className="font-IranYekan800 text-BoldM text-White">
                {project.title}
            </p>
        </div>
    </>
  );
};

export default ProjectCard;