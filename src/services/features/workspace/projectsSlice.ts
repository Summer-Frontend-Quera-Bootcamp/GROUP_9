import axios from "axios";
import { AXIOS } from "../../../config/axios.config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type InitialState = {
  id: number;
  name: string;
};

const initialState: InitialState[] = [];

export const fetchprojects = createAsyncThunk<any, any>(
  "projects/fetchprojecta",
  (id: number) => {
    return AXIOS.get(`/workspaces/${id}/projects/`).then(
      (response) => response.data
    );
  }
);

export const newproject = createAsyncThunk<any, { id: number; name: string }>(
  "workspace/new",
  (project: { id: number; name: string }, { rejectWithValue }) => {
    return AXIOS.post(`workspaces/${project.id}/projects/`, {
      name: project.name,
    })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const editproject = createAsyncThunk<
  any,
  { id: number; project_id: number; name: string }
>(
  "workspace/edit",
  (
    project: { id: number; project_id: number; name: string },
    { rejectWithValue }
  ) => {
    return axios
      .patch(`workspaces/${project.id}/projects/${project.project_id}/`, {
        name: project.name,
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

export const deleteproject = createAsyncThunk<
  any,
  { id: number; project_id: number }
>(
  "workspace/delete",
  (project: { id: number; project_id: number }, { rejectWithValue }) => {
    return AXIOS.delete(
      `workspaces/${project.id}/projects/${project.project_id}/`
    )
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
      state = action.payload;
      //console.log("get projects",state)
    });
    builder.addCase(newproject.fulfilled, (state, action) => {
      state.push(action.payload);
      //console.log("new projects", state);
    });
    builder.addCase(editproject.fulfilled, (state, action) => {
      state.forEach((space, index) => {
        if (space.id == action.payload.id) {
          state.splice(index, 1);
        }
      });
      //console.log("edit projects", state);
    });
    builder.addCase(deleteproject.fulfilled, (state, action) => {
      state.push(action.payload);
      state.forEach((space, index) => {
        if (space.id == action.payload.id) {
          state.splice(index, 1);
        }
      });
      //console.log("delete projects", state);
    });
  },
});

export default projectSlice.reducer;
