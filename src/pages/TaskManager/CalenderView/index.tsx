// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import CalenderView from "../../../components/TaskManager/CalenderView";
import Navbar from "../../../components/TaskManager/Navbar";

// <======== Hooks ========> //


const CalenderViewPage: React.FC = (): JSX.Element => {
    return (
        <>
            <Navbar activePage="CalenderView"/>
            <CalenderView/>
        </>
    )
}

export default CalenderViewPage;