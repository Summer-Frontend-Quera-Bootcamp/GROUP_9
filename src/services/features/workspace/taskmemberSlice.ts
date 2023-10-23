import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../../config/axios.config";

export type InitialState = {
  user: {
    id: 0,
    username: string,
    email: string,
    first_name: string,
    last_name: string,
    phone_number:string,
    thumbnail: string
  }
};

const initialState: InitialState[] = [];

export const fetchtasksmember = createAsyncThunk<any,any>(
  "taskmember/fetch",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number}) => {
  
    return AXIOS
      .get(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/assignee/`)
      .then((response) => response.data)
  }
);

export const newtaskmember = createAsyncThunk<any,any>(
  "taskmember/new",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number,username:string,email:string,first_name:string,last_name:string,phone_number:string,thumbnail:string} , { rejectWithValue }) => {

    return AXIOS
      .post(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/assignee/`, {
        user: {
          username:board.username ,
          email: board.email,
          first_name:board.first_name,
          last_name: board.last_name,
          phone_number:board.phone_number,
          thumbnail: board.thumbnail
        }
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const deletetaskmember = createAsyncThunk<any,any>(
  "taskmember/delete",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number,member_id:number} , { rejectWithValue }) => {

    return AXIOS
      .delete(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/assignee/${board.member_id}`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const taskmemberSlice = createSlice({
  name: "taskmember",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchtasksmember.fulfilled, (state, action) => {
      state=action.payload;
      console.log("get tasks members",state)
    });
    builder.addCase(newtaskmember.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new tasks members",state)
    });
    builder.addCase(deletetaskmember.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.user.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("delete task members",state)
    });
  },
});

export default taskmemberSlice.reducer;
