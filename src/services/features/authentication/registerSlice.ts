import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
  loading: boolean;
  success: any;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  success: "",
  error: "",
};

export const registerUsers = createAsyncThunk(
  "register/registerUsers",
  (
    userData: { username: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    return axios
      .post("https://quera.iran.liara.run/accounts/", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.error = "";
    });
    builder.addCase(registerUsers.rejected, (state, action) => {
      state.loading = false;
      state.success = "";
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default registerSlice.reducer;
