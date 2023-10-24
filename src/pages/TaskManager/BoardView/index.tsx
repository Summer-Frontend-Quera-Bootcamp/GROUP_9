// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import { useEffect } from "react";
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";
import { useDispatch,useSelector } from "react-redux";
import { editworkspace, fetchworkspace, newworkspace } from "../../../services/features/workspace/workspaceSlice";
import { fetchprojects, newproject } from "../../../services/features/workspace/projectsSlice";
// <======== Hooks ========> //


const BoardViewPage: React.FC = (): JSX.Element => {
    const dispatch=useDispatch();
    const workspace = useSelector((state)=>(state.workspace))
    useEffect(()=>{
        dispatch(fetchworkspace);
        dispatch(newworkspace({name:"abol",color:"blue"}));
        
    },[])
    console.log("workspace is : ",workspace)
    return (
        <>
            <Navbar activePage="BoardView"/>
            <NewTaskBtn />
        </>
    )
}

export default BoardViewPage;