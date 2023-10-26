// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import ListViewProjectBoard from "../ListViewBoard";

// <======== Constants ========> //
import { workspaces } from "../../../../constants";

// <======== Hooks ========> //

const ListViewProjectContainer: React.FC = (): JSX.Element => {
  return (
    <main className="w-full h-full mt-[31px] pb-[140px] pr-[23px] flex flex-col gap-xl overflow-x-hidden overflow-y-scroll">
      {workspaces[3].projects[0].boards?.map((board) => {
        return <ListViewProjectBoard key={board.title} board={board} />;
      })}
    </main>
  );
};

export default ListViewProjectContainer;
