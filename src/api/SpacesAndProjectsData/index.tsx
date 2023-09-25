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
  color: string;
  projectList?: Array<ProjectList>;
  members?: Array<MemberWorkSpaceList>;
}

export const SpacesAndProjectsList: Array<WorkSpaceList> = [
  {
    workSpacename: "درس مدیریت پروژه",
    color: "Green-Primary",
  },
  {
    workSpacename: "کارهای شخصی",
    color: "Yellow-Primary",
    projectList: [
      {
        projectName: "پروژه اول",
      },
      {
        projectName: "پروژه دوم",
      },
    ],
  },
  {
    workSpacename: "درس‌ کامپایلر",
    color: "Red-Primary",
  },
  {
    workSpacename: "درس طراحی الگوریتم",
    color: "Blue-Primary",
  },
];
