// <======== Code-Files ========> //
//import NewProjectCard from "./components/NewProjectCard";
import "./index.css";

// <======== Component-Files ========> //
import MainLayout from "./pages/Main Pages/Layout";
import WorkSpace from "./pages/Main Pages/WorkSpace Page";

// <======== Hook ========> //

const App = () => {
  return (
    <MainLayout page="WorkSpace">
      <WorkSpace
        feed={[
          {
            projectCardHeadingFeed: "درس مدیریت پروژه",
            ProjectsFeed: [
              "پروژه ی اول",
              "پروژه ی دوم",
              "پروژه ی سوم",
              "پروژه ی چهارم",
              "پروژه ی پنجم",
            ],
            groupColorFeed: "Green",
          },
          {
            projectCardHeadingFeed: "کار های شخصی",
            ProjectsFeed: ["پروژه ی اول", "پروژه ی دوم", "پروژه ی سوم"],
            groupColorFeed: "Yellow",
          },
          {
            projectCardHeadingFeed: "درس کامپایلر",
            groupColorFeed: "Red",
          },
          {
            projectCardHeadingFeed: "درس طراحی الگوریتم",
            ProjectsFeed: [
              "پروژه ی اول",
              "پروژه ی دوم",
              "پروژه ی سوم",
              "پروژه ی چهارم",
            ],
            groupColorFeed: "Blue",
          },
        ]}
      />
    </MainLayout>
  );
};

export default App;
