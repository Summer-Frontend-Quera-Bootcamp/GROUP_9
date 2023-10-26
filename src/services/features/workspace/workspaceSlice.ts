//import axios from "axios";
import { AXIOS } from "../../../config/axios.config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { act } from "react-dom/test-utils";

export type InitialState = {
  id: number;
  name: string;
  color: string;
};

const initialState: InitialState[] = [];

export const fetchworkspace = createAsyncThunk(
  "workspace/fetchworkspace",
  () => {
    return AXIOS.get("workspaces/").then((response) => {
      //console.log(response.data);
      return response.data;
    });
  }
);

export const newworkspace = createAsyncThunk<any, any>(
  "workspace/new",
  (workspace: { name: string; color: string }, { rejectWithValue }) => {
    return AXIOS.post("workspaces/", {
      name: workspace.name,
      color: workspace.color,
    })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const editworkspace = createAsyncThunk<any, any>(
  "workspace/edit",
  (
    workspace: { id: number; name: string; color: string },
    { rejectWithValue }
  ) => {
    return AXIOS.patch(`workspaces/${workspace.id}/`, {
      name: workspace.name,
      color: workspace.color,
    })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const deleteworkspace = createAsyncThunk<any, any>(
  "workspace/delete",
  (workspace: { id: number }, { rejectWithValue }) => {
    return AXIOS.delete(`workspaces/${workspace.id}/`)
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
      //console.log("get");
    });
    builder.addCase(newworkspace.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new ", action.payload);
    });
    builder.addCase(editworkspace.fulfilled, (state, action) => {
      // state.push(action.payload);
      state.forEach((space, index) => {
        if (space.id == action.payload.id) {
          state[index] = action.payload;
        }
      });
      console.log("edit", action.payload);
    });
    builder.addCase(deleteworkspace.fulfilled, (state, action) => {
      state.push(action.payload);
      state.forEach((space, index) => {
        if (space.id == action.payload.id) {
          state.splice(index, 1);
        }
      });
      console.log("edit", action.payload);
    });
  },
});

export default workspaceSlice.reducer;
