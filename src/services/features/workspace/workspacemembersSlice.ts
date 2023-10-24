import axios from "axios";
import {AXIOS} from '../../../config/axios.config'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export type InitialState = {
    user: {
        id: 0,
        username: string,
        email: string,
        first_name: string,
        last_name: string,
        phone_number: string,
        thumbnail: string
      },
      is_super_access: boolean
};

const initialState: InitialState[] = [];

export const fetchworkspacemembers = createAsyncThunk(
  "workspacemembers/fetchmembers",
  (workspace:{id:number}) => {
    return AXIOS
      .get(`workspaces/${workspace.id}/`)
      .then((response) => response.data)
  }
);

export const newworkspacemembers = createAsyncThunk<any,any>(
  "workspacemembers/newmembers",
  (workspace:{id:number,username:string,email:string,first_name:string,last_name:string,phone_number:string,thumbnail:string,is_super_access:boolean} , { rejectWithValue }) => {
    return AXIOS
      .post(`workspaces/${workspace.id}/`, {
        user: {
            username:workspace.username ,
            email:workspace.email ,
            first_name: workspace.first_name,
            last_name: workspace.last_name,
            phone_number: workspace.phone_number,
            thumbnail: workspace.thumbnail
          },
          is_super_access: workspace.is_super_access
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const editworkspacemembers = createAsyncThunk<any,any>(
  "workspacemembers/editmembers",
  (workspace:{id:number,members_id:number,username:string,email:string,first_name:string,last_name:string,phone_number:string,thumbnail:string,is_super_access:boolean} , { rejectWithValue }) => {

    return AXIOS
      .patch(`workspaces/${workspace.id}/members/${workspace.members_id}/`, {
        user: {
            username:workspace.username ,
            email:workspace.email ,
            first_name: workspace.first_name,
            last_name: workspace.last_name,
            phone_number: workspace.phone_number,
            thumbnail: workspace.thumbnail
          },
          is_super_access: workspace.is_super_access
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);


export const deleteworkspacemembers = createAsyncThunk<any,any>(
  "workspacemembers/deletemembers",
  (workspace:{id:number,members_id:number} , { rejectWithValue }) => {
    return AXIOS
      .delete(`workspaces/${workspace.id}/members/${workspace.members_id}`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);



const workspacemembersSlice = createSlice({
  name: "workspacemembers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchworkspacemembers.fulfilled, (state, action) => {
      state = action.payload;
      console.log("get");
    });
    builder.addCase(newworkspacemembers.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new ",action.payload)
    });
    builder.addCase(editworkspacemembers.fulfilled, (state, action) => {
      // state.push(action.payload);
      state.forEach((space,index)=>{
        if(space.user.id == action.payload.id){
          state[index] = action.payload;
        }
      })
      console.log("edit",action.payload)
    });
    builder.addCase(deleteworkspacemembers.fulfilled, (state, action) => {
      // state.push(action.payload);
      state.forEach((space,index)=>{
        if(space.user.id == action.payload.id){
          state.splice(index,1);
        }
      })
      console.log("edit",action.payload)
    });
  },
});

export default workspacemembersSlice.reducer;
