import { Account } from "../Account";

export interface Workspaces {
  id?: number;
  name?: string;
  color?:
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

export interface WorkspaceMembers {
  user?: Account;
  is_super_access?: boolean;
}

export interface Projects {
  id?: number;
  name?: string;
}

export interface ProjectMember {
  id?: number;
  user?: Account;
}

export interface Boards {
  id?: number;
  name?: string;
  order?: number;
  tasks?: string;
  tasks_count?: string;
  is_archive?: boolean;
}

export interface Tasks {
  id?: number;
  name?: string;
  description?: string;
  deadline?: string;
  priority?: "Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
  attachment?: string;
  thumbnail?: string;
  order?: number;
  members?: string;
}

export interface TaskMember {
  user?: Account;
}

export interface TaskComment {
  id?: number;
  author?: number;
  attachment?: string;
  text?: string;
}

export interface TaskLog {
  id?: number;
  task?: number;
  old_priority?: "Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
  new_priority?: "Nothing" | "Low" | "Intermediate" | "High" | "Emergency";
}

export interface Subscription {
  email: string;
  url: string;
}
