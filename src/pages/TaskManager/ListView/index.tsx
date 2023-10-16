// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import Navbar from "../../../components/TaskManager/Navbar";
import NewTaskBtn from "../../../components/TaskManager/NewTaskButton";

// <======== Hooks ========> //


const ListViewPage: React.FC = (): JSX.Element => {
    return (
        <>
            <Navbar activePage="ListView"/>
            <NewTaskBtn />
        </>
    )
}

export default ListViewPage;