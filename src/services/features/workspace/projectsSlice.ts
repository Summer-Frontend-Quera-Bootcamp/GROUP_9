import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type InitialState = {
  id:number,
  name:string,
};

const initialState: InitialState[] = [];

export const fetchprojects = createAsyncThunk<any,any>(
  "projects/fetchprojecta",
  (id:number) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .get(`https://quera.iran.liara.run/workspaces/${id}/projects/`)
      .then((response) => response.data)
  }
);

export const newproject = createAsyncThunk<any,{id:number,name:string}>(
  "workspace/new",
  (project:{id:number,name:string} , { rejectWithValue }) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .post(`https://quera.iran.liara.run/workspaces/${project.id}/projects/`, {
        name:project.name,
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const editproject = createAsyncThunk<any,{id:number,project_id:number,name:string}>(
  "workspace/new",
  (project:{id:number,project_id:number,name:string} , { rejectWithValue }) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .patch(`https://quera.iran.liara.run/workspaces/${project.id}/projects/${project.project_id}/`, {
        name:project.name,
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);


export const deleteproject = createAsyncThunk<any,{id:number,project_id:number,name:string}>(
  "workspace/new",
  (project:{id:number,project_id:number,name:string} , { rejectWithValue }) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .delete(`https://quera.iran.liara.run/workspaces/${project.id}/projects/${project.project_id}/`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchprojects.fulfilled, (state, action) => {
      state=action.payload;
      console.log("get projects",state)
    });
    builder.addCase(newproject.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new projects",state)
    });
    builder.addCase(editproject.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("edit projects",state)
    });
    builder.addCase(deleteproject.fulfilled, (state, action) => {
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("delete projects",state)
    });
  },
});

export default projectSlice.reducer;
