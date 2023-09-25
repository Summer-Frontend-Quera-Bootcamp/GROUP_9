export interface ProjectList {
  projectName: string;
}

export interface MemberWorkSpaceList {
  userName: string;
  email: string;
  profileImage: string;
}

export interface WorkSpaceList {
  workSpacename: string;
  color:
    | "Cyan"
    | "Red"
    | "Teal"
    | "Pink"
    | "Brand"
    | "Grape"
    | "Green"
    | "Violet"
    | "Lime"
    | "Indigo"
    | "Yellow"
    | "Blue"
    | "Orange";
  projectList?: Array<ProjectList>;
  members?: Array<MemberWorkSpaceList>;
}

export const SpacesAndProjectsList: Array<WorkSpaceList> = [
  {
    workSpacename: "درس مدیریت پروژه",
    projectList: [
      {
        projectName: "پروژه اول",
      },
      {
        projectName: "پروژه دوم",
      },
      {
        projectName: "پروژه سوم",
      },
      {
        projectName: "پروژه چهارم",
      },
      {
        projectName: "پروژه پنجم",
      },
    ],
    color: "Green",
  },
  {
    workSpacename: "کارهای شخصی",
    color: "Yellow",
    projectList: [
      {
        projectName: "پروژه اول",
      },
      {
        projectName: "پروژه دوم",
      },
      {
        projectName: "پروژه سوم",
      },
    ],
  },
  {
    workSpacename: "درس‌ کامپایلر",
    color: "Red",
  },
  {
    workSpacename: "درس طراحی الگوریتم",
    color: "Blue",
    projectList: [
      {
        projectName: "پروژه اول",
      },
      {
        projectName: "پروژه دوم",
      },
    ],
  },
];
