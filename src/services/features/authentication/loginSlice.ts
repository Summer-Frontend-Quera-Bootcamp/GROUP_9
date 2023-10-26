import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  success: any;
  id: number;
  userName: string;
  fullName: string;
  access: string;
  refresh: string;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  success: "",
  id: 0,
  userName: "",
  fullName: "",
  access: "",
  refresh: "",
  error: "",
};

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  (userData: { username: string; password: string }, { rejectWithValue }) => {
    return axios
      .post("https://quera.iran.liara.run/accounts/login/", {
        username: userData.username,
        password: userData.password,
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.access = action.payload.access;
      state.id = action.payload.user_id;
      state.userName = action.payload.username;
      state.fullName = action.payload.first_name + " " + action.payload.last_name;
      state.refresh = action.payload.refresh;
      state.error = "";
      console.log(action.payload.user_id);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.success = "";
      state.id = 0;
      state.access = "";
      state.error = String(action.payload) || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
