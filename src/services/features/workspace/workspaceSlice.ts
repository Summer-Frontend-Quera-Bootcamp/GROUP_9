import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export type InitialState = {
  id:number,
  name:string,
  color:string
};

const initialState: InitialState[] = [];

export const fetchworkspace = createAsyncThunk(
  "workspace/fetchworkspace",
  () => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .get("https://quera.iran.liara.run/workspaces/")
      .then((response) => response.data)
  }
);

export const newworkspace = createAsyncThunk<any,any>(
  "workspace/new",
  (workspace:{name:string,color:string} , { rejectWithValue }) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .post("https://quera.iran.liara.run/workspaces/", {
        name:workspace.name,
        color:workspace.color
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const editworkspace = createAsyncThunk<any,any>(
  "workspace/edit",
  (workspace:{id:number,name:string,color:string} , { rejectWithValue }) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .patch(`https://quera.iran.liara.run/workspaces/${workspace.id}/`, {
        name:workspace.name,
        color:workspace.color
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);


export const deleteworkspace = createAsyncThunk<any,any>(
  "workspace/delete",
  (workspace:{id:number} , { rejectWithValue }) => {
    axios.defaults.headers.common.Authorization=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDAwNTIxLCJpYXQiOjE2OTc5Nzg5MjEsImp0aSI6ImE4ZDAwZjhmZWFmZjQ4Yzg5N2VkMDAyZTA1ODRiNGZhIiwidXNlcl9pZCI6MTM4fQ.QRpO1JPBf6V0JTJu3_q8JXnjfzctzOTbsOMkZ3I0zVw
    `
    return axios
      .delete(`https://quera.iran.liara.run/workspaces/${workspace.id}/`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);



const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchworkspace.fulfilled, (state, action) => {
      state = action.payload;
      console.log("get");
    });
    builder.addCase(newworkspace.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new ",action.payload)
    });
    builder.addCase(editworkspace.fulfilled, (state, action) => {
      // state.push(action.payload);
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state[index] = action.payload;
        }
      })
      console.log("edit",action.payload)
    });
    builder.addCase(deleteworkspace.fulfilled, (state, action) => {
      // state.push(action.payload);
      state.forEach((space,index)=>{
        if(space.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("edit",action.payload)
    });
  },
});

export default workspaceSlice.reducer;
