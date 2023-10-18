import { workspaces } from "../../../../constants";
// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ListViewProjectBoard from "../ListViewBoard";

// <======== Hooks ========> //


const ListViewProjectContainer: React.FC = (): JSX.Element => {
    return (
        <main className="w-full h-full mt-[31px] pb-[140px] pr-[23px] flex flex-col gap-xl overflow-x-hidden overflow-y-scroll">
            {workspaces[1].projects[0].boards?.map((board) => {
                return(
                    <ListViewProjectBoard board={board}/>
                )
            })}
        </main>
    )
}

export default ListViewProjectContainer;