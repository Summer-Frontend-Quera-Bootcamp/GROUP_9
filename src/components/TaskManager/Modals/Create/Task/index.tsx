import { ChangeEvent, useEffect, useState } from "react";
import AvatarDotted from "../../Information/Task/AvatarDotted";
import PriorityModal from "./PriorityModal";
import TagModal from "./TagModal";
import { GrayRectangle } from "../../../../../assets/Icons/TaskManager/Modals/Task/Create/Rectangle";
import { SecondaryModalCloseButtonIcon } from "../../../../../assets/Icons/CommonComponents/Modal/ModalCloseButton";
import { UploadFileIcon } from "../../../../../assets/Icons/TaskManager/Modals/Task/Create/UploadFile";
// import { showtagmodal } from "../../../../../services/features/workspace/taskmodalSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../../services/app/hooks";
import CalenderModal from "../../CalenderModal";
import {
  hidefirstasktmodal,
  setDescription,
  setname,
  showcalender,
  showfirstasktmodal,
  showpriority,
  showtag,
} from "../../../../../services/features/workspace/taskmodalSlice";
import { fetchprojects } from "../../../../../services/features/workspace/projectsSlice";
import { fetchworkspacemembers } from "../../../../../services/features/workspace/workspacemembersSlice";
import { newtask } from "../../../../../services/features/workspace/taskSlice";
import { fetchboards, newboard } from "../../../../../services/features/workspace/boardSlice";

const Newtaskmodal = () => {

  const display = useSelector((state) => state.taskmodal.firstmodal);
  const space = useSelector((state)=>state.current.workspace_id);
  const project_id = useSelector(state=>state.current.project_id)
  const spacemembers = useSelector((state)=>state.workspacemembers);
  const projects = useSelector((state)=>state.project);

  const dispatch = useAppDispatch();
  const priority = useSelector((state:any)=>state.taskmodal.prioritymodal);
  const tag = useSelector((state:any)=>state.taskmodal.tagmodal);
  const calender = useSelector((state:any)=>state.taskmodal.calendermodal);

  const priorityvalue = useSelector((state:any)=>state.taskmodal.priority);
  const name = useSelector((state:any)=>state.taskmodal.name);
  const description = useSelector((state:any)=>state.taskmodal.description);
  const deadline = useSelector((state:any)=>state.taskmodal.deadline);
  const attachment = useSelector((state:any)=>state.taskmodal.attachment);
  const thumbnail = useSelector((state:any)=>state.taskmodal.thumbnail);
  const order = useSelector((state:any)=>state.taskmodal.order);
  //const boards = useSelector((state)=>state.board);

  const [project,setProject] = useState();
  const [members,setMembers] = useState();
  const [boards,setBoards] = useState(useSelector((state)=>state.board))
  const [tagShow, setTagShow] = useState(false);
  const [calenderShow, setCalenderShow] = useState(false);
  const [file,setFile] = useState<File>();

  useEffect(()=>{
    dispatch(fetchworkspacemembers({id:space})).then(d=>setMembers(d.payload));
    dispatch(fetchprojects(space)).then((d)=>setProject(d.payload));
  },[space,projects,spacemembers])


  const handleclick = () => {
    console.log("clicked");
    dispatch(hidefirstasktmodal());
  };

  const handlediscription=(e:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setDescription(e.target.value));
  }

  const titlechange =(e: ChangeEvent<HTMLInputElement>)=>{
    dispatch(setname(e.target.value));
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    console.log("file is :",file);
  };

  const handlenewtask=()=>{
    dispatch(fetchboards({workspace_id:space,project_id:project_id})).then((e)=>{
      setBoards(e.payload)
      console.log("%%%%%%%%%%%%%%%%%%%%%%% :",boards)
      if(boards.length){
        
        dispatch(newtask({workspace_id:space,project_id:project_id,board_id:boards[0].id,name:"ali",description:"hi ali this is ",priority:0,attachment:"af",thumbnail:"fasd",order:1}))
      }
      else{
        console.log("boards in else :",boards)
        dispatch(newboard({workspace_id:space,project_id:project_id,name:"To Do",order:0,is_archive:false,color:"Blue"})).then(()=>{
          dispatch(fetchboards({workspace_id:space,project_id:project_id})).then(()=>{
            setBoards(e.payload);
            dispatch(newtask({workspace_id:space,project_id:project_id,board_id:boards[0].id,name:"ali",description:"hi ali this is ",priority:0,attachment:"af",thumbnail:"fasd",order:1}))
          })
        })
      }
    });
      }

  return (
    <div
      className={`w-[1153px] h-auto relative bg-White p-l m-auto shadow-NewProjectModal rounded-[20px] ${display} z-40`}
    >
      <CalenderModal show={calenderShow} />
      <div className="w-full h-auto mb-xl flex justify-between items-cente">
        <div className="flex items-center">
          <div className="ml-[13px]">{GrayRectangle}</div>
          <input type="text" onChange={titlechange} className="text-[24px] .placeholder_Black text-Black font-IranYekan500" placeholder="عنوان تسک">
            
          </input>
        </div>
        <div className="hover:cursor-pointer" onClick={handleclick}>
          {SecondaryModalCloseButtonIcon}
        </div>
      </div>
      <div className="gap-xs text-Black text-[16px] font-IranYekan500 w-full h-[38px] mb-xl flex justify-start items-center">
        <div>در</div>
        <select className="hover:cursor-pointer w-[158px] h-full p-[5px] px-xs border border-[#E9EBF0] rounded-[6px]">
          {project?.map(project_=>{
            return (
              <option value={project_.id}>{project_.name}</option>
            )
          })}
        </select>
        <div>برای</div>
        <div className="w-[34px] h-[34px] m-[2px]">
        
            <select className="w-[40px] appearance-none h-[40px] flex flex-row  justify-center items-center  cursor-pointer  border border-[#C1C1C1] border-dashed rounded-full pl-0 ">
            {members?.map(member=>{
            return (
              <option  label={`${member.user.username.split(" ").map(sec=>sec[0].toUpperCase()).join("")}`}  value={member.user.id}>{member.user.username}</option>
            )
          })}
            </select>
          
        </div>
      </div>
      <textarea
        className="resize-none w-full h-[191px] mb-xl px-l py-[19px] font-IranYekan500 text-[16px] text-[#AEAEAE] border border-[#BDBDBD] rounded-[12px]"
        placeholder="توضیحاتی برای این تسک بنویسید"
        onChange={handlediscription}
      ></textarea>
      <div className="gap-xs text-Black text-[16px] font-IranYekan500 w-full h-auto mb-xl flex justify-start items-center">
        <div>افزودن پیوست</div>
        <label
          className="hover:cursor-pointer px-xs py-[4px] gap-[4px] flex border border-Brand-Primary rounded-[4px]"
          htmlFor="NewWorkSpaceFileUpload"
        >
          <div>{UploadFileIcon}</div>
          <div>آپلود فایل</div>
        </label>
        <input
          className="hidden"
          type="file"
          onChange={handleFileChange}
          name="NewWorkSpaceFileUpload"
          id="NewWorkSpaceFileUpload"
        ></input>
      </div>
      <div className=" w-full h-auto flex justify-between items-center">
        <div className="flex gap-m">
          <div
            onClick={() => dispatch(showpriority())}
            className="w-[50px] h-[50px]"
          >
            <AvatarDotted iconName="priority" />
          </div>
          <div
            className="w-[50px] h-[50px]"
            onClick={() => dispatch(showcalender())}
          >
            <AvatarDotted iconName="calender" />
          </div>
          <div
            onClick={() => dispatch(showtag())}
            className="w-[50px] h-[50px]"
          >
            <AvatarDotted iconName="tag" />
          </div>
        </div>
        <button onClick={handlenewtask} className="w-[125px] h-l bg-Brand-Primary font-IranYekan400 text-[12px] text-White py-[7px] rounded-[4px]">
          ساختن تسک
        </button>
      </div>

      <PriorityModal show={priority} />
      <TagModal show={tag} />
    </div>
  );
};

export default Newtaskmodal;
