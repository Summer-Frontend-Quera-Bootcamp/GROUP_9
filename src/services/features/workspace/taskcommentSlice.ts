import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../../config/axios.config";

export type InitialState = {
  id:number,
  author: number,
  attachment: string,
  text: string
};

const initialState: InitialState[] = [];

export const fetchtaskcomment = createAsyncThunk<any,any>(
  "taskcomment/fetch",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number}) => {
  
    return AXIOS
      .get(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/comments/`)
      .then((response) => response.data)
  }
);

export const newtaskcomment = createAsyncThunk<any,any>(
  "taskcomment/new",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number,author:number,attachment:string,text:string} , { rejectWithValue }) => {

    return AXIOS
      .post(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/comments/`, {
        author:board.author,
        attachment:board.attachment,
        text:board.text
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const deletetaskcomment = createAsyncThunk<any,any>(
  "taskcomment/delete",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number,member_id:number} , { rejectWithValue }) => {

    return AXIOS
      .delete(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/assignee/${board.member_id}`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const taskcommentSlice = createSlice({
  name: "taskcomment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchtaskcomment.fulfilled, (state, action) => {
      state=action.payload;
      console.log("get commetns",state)
    });
    builder.addCase(newtaskcomment.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new comments",state)
    });
    builder.addCase(deletetaskcomment.fulfilled, (state, action) => {
      // state.forEach((space,index)=>{
      //   if(space.id == action.payload.id){
      //     state.splice(index,1);
      //   }
      // })
      console.log("delete comments",state)
    });
  },
});

export default taskcommentSlice.reducer;
