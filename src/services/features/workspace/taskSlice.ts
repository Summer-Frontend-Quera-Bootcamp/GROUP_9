import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../../config/axios.config";

export type InitialState = {
    id: number,
    name: string,
    description: string,
    deadline: string,
    priority: number,
    attachment: string,
    thumbnail: string,
    order: number,
    members: string,
    created_at: string
};

const initialState: InitialState[] = [];

export const fetchtasks = createAsyncThunk<any,any>(
  "task/fetch",
  (board:{workspace_id:number,project_id:number,board_id:number}) => {
  
    return AXIOS
      .get(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/`)
      .then((response) => response.data)
  }
);

export const newtask = createAsyncThunk<any,any>(
  "task/new",
  (board:{workspace_id:number,project_id:number,board_id:number,name:string,description:string,priority:number,attachment:string,thumbnail:string,order:number} , { rejectWithValue }) => {

    return AXIOS
      .post(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/`, {
        name:board.name,
        order:board.order,
        description:board.description,
        priority:board.priority,
        thumbnail:board.thumbnail,
        attachment:board.attachment
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const edittask = createAsyncThunk<any,any>(
  "task/edit",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number,name:string,description:string,priority:number,attachment:string,thumbnail:string,order:number} , { rejectWithValue }) => {
 
    return AXIOS
      .post(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/`, {
        name:board.name,
        order:board.order,
        description:board.description,
        priority:board.priority,
        thumbnail:board.thumbnail,
        attachment:board.attachment
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);


export const deletetask = createAsyncThunk<any,any>(
  "task/delete",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number} , { rejectWithValue }) => {

    return AXIOS
      .delete(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchtasks.fulfilled, (state, action) => {
      state=action.payload;
      console.log("get tasks",state)
    });
    builder.addCase(newtask.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new task",state)
    });
    builder.addCase(edittask.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("edit task",state)
    });
    builder.addCase(deletetask.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("delete task",state)
    });
  },
});

export default taskSlice.reducer;
