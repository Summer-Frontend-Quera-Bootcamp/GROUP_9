export interface Member {
  userName: string;
  Color:
    | "Red"
    | "Pink"
    | "Grape"
    | "Violet"
    | "Indigo"
    | "Blue"
    | "Cyan"
    | "Teal"
    | "Brand"
    | "Green"
    | "Lime"
    | "Yellow"
    | "Orange";
  email?: string;
  profileImage?: string;
}

export interface Label {
  content: string;
  color:
    | "Red"
    | "Pink"
    | "Grape"
    | "Violet"
    | "Indigo"
    | "Blue"
    | "Cyan"
    | "Teal"
    | "Brand"
    | "Green"
    | "Lime"
    | "Yellow"
    | "Orange";
}

export interface Tasks {
  title: string;
  description?: string;
  priority: "Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
  madeHistory?: string;
  deadline: string;
  members?: Array<Member>;
  coments?: Array<string>;
  labels?: Array<Label>;
  backGround?: string;
  done: boolean;
}

export interface ColumnTasksList {
  listName: string;
  listColor:
    | "Red-Primary"
    | "Pink-Primary"
    | "Grape-Primary"
    | "Violet-Primary"
    | "Indigo-Primary"
    | "Blue-Primary"
    | "Cyan-Primary"
    | "Teal-Primary"
    | "Brand-Primary"
    | "Green-Primary"
    | "Lime-Primary"
    | "Yellow-Primary"
    | "Orange-Primary";
  taskList?: Array<Tasks>;
}

export interface ProjectList {
  projectName: string;
  TaskList?: Array<ColumnTasksList>;
}

export interface WorkSpaceList {
  workSpacename: string;
  color:
    | "Red-Primary"
    | "Pink-Primary"
    | "Grape-Primary"
    | "Violet-Primary"
    | "Indigo-Primary"
    | "Blue-Primary"
    | "Cyan-Primary"
    | "Teal-Primary"
    | "Brand-Primary"
    | "Green-Primary"
    | "Lime-Primary"
    | "Yellow-Primary"
    | "Orange-Primary";
  projectList?: Array<ProjectList>;
  members?: Array<Member>;
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
        TaskList: [
          {
            listName: "Open",
            listColor: "Orange-Primary",
            taskList: [
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "Emergency",
                deadline: "5 مهر - فردا",
                members: [
                  {
                    userName: "Yasin Sahebi",
                    Color: "Grape",
                  },
                  {
                    userName: "Alireza Novin",
                    Color: "Brand",
                  },
                ],
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،",
                done: true,
              },
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "Emergency",
                deadline: "5 مهر - فردا",
                members: [
                  {
                    userName: "Abolfazl Mikaniki",
                    Color: "Violet",
                  },
                  {
                    userName: "Alireza Khosravani",
                    Color: "Pink",
                  },
                  {
                    userName: "Mahdi Alipour",
                    Color: "Red",
                  },
                  {
                    userName: "Sadegh Mohammadi",
                    Color: "Blue",
                  },
                ],
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                description:
                  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،",
                done: false,
              },
            ],
          },
          {
            listName: "In Progress",
            listColor: "Indigo-Primary",
          },
          {
            listName: "Pending",
            listColor: "Yellow-Primary",
            taskList: [
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "High",
                deadline: "5 مهر - فردا",
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                done: false,
              },
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "High",
                deadline: "5 مهر - فردا",
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                done: false,
              },
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "Emergency",
                deadline: "5 مهر - فردا",
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                done: false,
              },
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "Low",
                deadline: "5 مهر - فردا",
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                done: false,
              },
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "Nothing",
                deadline: "5 مهر - فردا",
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                done: false,
              },
              {
                title: "این یک تیتر برای این تسک هست.",
                priority: "Intermediate",
                deadline: "5 مهر - فردا",
                labels: [
                  {
                    content: "درس",
                    color: "Blue",
                  },
                  {
                    content: "پروژه",
                    color: "Grape",
                  },
                ],
                done: false,
              },
            ],
          },
          {
            listName: "To Do",
            listColor: "Orange-Primary",
          },
          {
            listName: "Review",
            listColor: "Pink-Primary",
          },
          {
            listName: "Done",
            listColor: "Blue-Primary",
          },
        ],
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
      {
        projectName: "پروژه ششم",
      },
      {
        projectName: "پروژه هفتم",
      },
    ],
  },
];
