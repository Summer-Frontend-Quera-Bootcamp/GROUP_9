import "./index.css";

// <======== Assest-Import ========> //

// <======== Component-Import ========> //
import DisplayManagement from "./DisplayManagement";
import TaskManagement from "./TaskManagement";

// <======== Hooks ========> //


interface INavbarProps {
  activePage?: "BoardView" | "ListView" | "CalenderView";
}

const Navbar: React.FC<INavbarProps> = ({ activePage }): JSX.Element => {
  return (
    <header className="fixed headerWidth top-[41px] right-[356px] left-[50px]">
      <DisplayManagement activePage={activePage} />
      <TaskManagement activePage={activePage} />
    </header>
  );
};

export default Navbar;
