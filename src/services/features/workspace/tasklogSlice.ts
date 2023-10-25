import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../../config/axios.config";

export type InitialState = {
  id: number,
  task: number,
  old_priority: number,
  new_priority: number
};

const initialState: InitialState[] = [];

export const fetchtasklog = createAsyncThunk<any,any>(
  "tasklog/fetch",
  (board:{workspace_id:number,project_id:number,board_id:number,task_id:number}) => {
  
    return AXIOS
      .get(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/tasks/${board.task_id}/logs/`)
      .then((response) => response.data)
  }
);

const tasklogSlice = createSlice({
  name: "tasklog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchtasklog.fulfilled, (state, action) => {
      state=action.payload;
      console.log("get logs",state)
    });
  },
});

export default tasklogSlice.reducer;
