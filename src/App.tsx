// <======== Code-Files ========> //
import "./index.css";

// <======== Component-Files ========> //
// import LogInPage from "./pages/Authentication Pages/Login Page";
import MainNavbar from "./components/Main Navbar";
import { useState } from "react";
import ListView from "./pages/Main Pages/Board Pages/ListView";
import BoardView from "./pages/Main Pages/Board Pages/BoardView";
import CalendarView from "./pages/Main Pages/Board Pages/CalenderView";

// <======== Hook ========> //

const App = () => {
  const [activeItem, setActiveItem] = useState<string>("نمایش لیستی");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const renderView = () => {
    switch (activeItem) {
      case "نمایش لیستی":
        return <ListView />;
      case "نمایش ستونی":
        return <BoardView />;
      case "تقویم":
        return <CalendarView />;
      default:
        return null;
    }
  };

  return (
    <>
      <MainNavbar activeItem={activeItem} onItemSelect={handleItemClick} />
      {renderView()}
    </>
  );
};

export default App;
