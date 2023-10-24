export interface Members {
  userName: string;
  userID: string;
  userColor:
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
    | "Orange"
    | string;
  userImage?: string | null;
  userEmail?: string;
}

export interface Labels {
  title: string;
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

export interface Comments {
  member: Members;
  date: string;
  content: string;
}

export interface Tasks {
  id: number;
  title: string;
  priority: "Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
  description?: string;
  madeHistory?: string;
  deadline: string;
  members?: Array<Members>;
  labels?: Array<Labels>;
  coments?: Array<Comments>;
  backGround?: string;
  done?: boolean;
}

export interface Boards {
  title: string;
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
  tasks?: Array<Tasks>;
}

export interface Projects {
  id: number;
  title: string;
  boards?: Array<Boards>;
}

export interface Workspaces {
  id: number;
  title: string;
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
  projects?: Array<Projects>;
  members?: Array<Members>;
}
