import { Label } from "../../../../../api/SpacesAndProjectsData";
import { v4 as uuidv4 } from 'uuid';
interface Iprops{
    labels:Label[]
}


const TaskTags:React.FC<Iprops>=({labels}):JSX.Element=>{

    return (
        <div className="flex items-center justify-start gap-[20px]">
        {labels.map(label=>{
          return(
            <div key={uuidv4()} className= {`h-[24px] min-w-[41px] flex items-center font-IranYekan800 text-BodyXS justify-center rounded-[14px] bg-${label.color}-Secondary text-${label.color}-Primary`}>{label.content}</div>
          )
        })}
</div>
    )
};

export default TaskTags;