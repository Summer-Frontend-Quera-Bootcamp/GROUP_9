// <======== Code-Files ========> //
import TaskPlusIcon from "../../../assets/Icon/TaskPlusIcon.svg";
import "../../../api/SpacesAndProjectsData";
import { SpacesAndProjectsList } from "../../../api/SpacesAndProjectsData";

// <======== import Components ========> //
import MainNavbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Button from "../../../components/common/Button";
import WorkSpaceListSidebar from "../../../components/WorkSpaceList";

// <======== Hook ========> //

interface IMainLayoutProps extends React.PropsWithChildren {
  page: "BoardView" | "ListView" | "CalenderView" | "WorkSpace";
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  page,
}): JSX.Element => {
  return (
    <>
      <Sidebar>
        <WorkSpaceListSidebar SpacesList={SpacesAndProjectsList} />
      </Sidebar>
      {page !== "WorkSpace" && (
        <>
          <MainNavbar activePage={`${page}`} />
          <Button ClassName="w-[118px] fixed bottom-[30px] left-[50px] bg-Brand-Primary px-xs py-[12px] rounded-[6px] flex items-center gap-[4px] z-10">
            <img src={TaskPlusIcon} />
            <p className="font-IranYekan800 text-BodyS text-White cursor-pointer">
              تسک جدید
            </p>
          </Button>
        </>
      )}
      {children}
    </>
  );
};

export default MainLayout;
