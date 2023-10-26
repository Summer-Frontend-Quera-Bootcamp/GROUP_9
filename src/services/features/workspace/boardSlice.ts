import axios, { Axios } from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../../config/axios.config";

export type InitialState = {
        id: number,
        name: string,
        order: number,
        tasks: string,
        tasks_count: string,
        is_archive: true,
        color: string
};

const initialState: InitialState[] = [];

export const fetchboards = createAsyncThunk<any,{workspace_id:number,project_id:number}>(
  "board/fetchall",
  (board:{workspace_id:number,project_id:number}) => {
    // axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    // `
    return AXIOS
      .get(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/`)
      .then((response) => response.data)
  }
);

export const fetchboard = createAsyncThunk(
  "board/fetch",
  (board:{workspace_id:number,project_id:number,board_id:number}) => {
    // axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    // `
    return AXIOS
      .get(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/`)
      .then((response) => response.data)
  }
);
export const newboard = createAsyncThunk<any,{workspace_id:number,project_id:number,name:string,order:number,is_archive:boolean,color:string}>(
  "board/new",
  (board:{workspace_id:number,project_id:number,name:string,order:number,is_archive:boolean,color:string} , { rejectWithValue }) => {
    // axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    // `
    return AXIOS
      .post(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/`, {
        name:board.name,
        order:board.order,
        is_archive:board.is_archive,
        color:board.color
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const editboard = createAsyncThunk<any,any>(
  "board/edit",
  (board:{workspace_id:number,project_id:number,board_id:number,name:string,order:number,is_archive:boolean,color:string} , { rejectWithValue }) => {
    // axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    // `
    return AXIOS
      .post(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/`, {
        name:board.name,
        order:board.order,
        is_archive:board.is_archive,
        color:board.color
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);


export const deleteboard = createAsyncThunk<any,any>(
  "board/delete",
  (board:{workspace_id:number,project_id:number,board_id:number} , { rejectWithValue }) => {
    // axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    // `
    return AXIOS
      .delete(`workspaces/${board.workspace_id}/projects/${board.project_id}/boards/${board.board_id}/`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchboards.fulfilled, (state, action) => {
      state=action.payload;
      console.log("get boards",state,action.payload)
    });
    builder.addCase(fetchboard.fulfilled, (state, action) => {
      
      console.log("get board",action.payload);
      return action.payload;
    });
    builder.addCase(newboard.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new board",state)
    });
    builder.addCase(editboard.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("edit board",state)
    });
    builder.addCase(deleteboard.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("delete board",state)
    });
  },
});

export default boardSlice.reducer;
