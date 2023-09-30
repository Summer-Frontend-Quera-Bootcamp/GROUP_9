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
  id:string;
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
  id:number;
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
            id:0,
            listName: "Open",
            listColor: "Orange-Primary",
            taskList: [
              { 
                id:"0",
                title: "این یک تیتر برای این تسک هست.",
                priority: "Emergency",
                deadline: "5 مهر - فردا",
                members: [
                  {
                    userName: "Yasin Sahebi",
                    Color: "Brand",
                  },
                  {
                    userName: "Abolfazl Mikaniki",
                    Color: "Blue",
                  },
                  {
                    userName: "Alireza Novin",
                    Color: "Yellow",
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
                id:"1",
                title: "این یک تیتر برای این تسک هست.",
                priority: "Emergency",
                deadline: "5 مهر - فردا",
                members: [
                  {
                    userName: "Abolfazl Mikaniki",
                    Color: "Blue",
                  },
                  {
                    userName: "Alireza Khosravani",
                    Color: "Yellow",
                  },
                  {
                    userName: "Mahdi Alipour",
                    Color: "Brand",
                  },
                  {
                    userName: "Sadegh Mohammadi",
                    Color: "Orange",
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
            id:1,
            listName: "In Progress",
            listColor: "Indigo-Primary",
          },
          {
            id:2,
            listName: "Pending",
            listColor: "Yellow-Primary",
            taskList: [
              {
                id:"2",
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
                id:"3",
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
                id:"4",
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
                id:"5",
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
                id:"6",
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
                id:"7",
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
            id:3,
            listName: "To Do",
            listColor: "Orange-Primary",
          },
          {
            id:4,
            listName: "Review",
            listColor: "Pink-Primary",
          },
          {
            id:5,
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
