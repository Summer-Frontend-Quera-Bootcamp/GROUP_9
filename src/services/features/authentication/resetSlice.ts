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

export const resetPassword = createAsyncThunk(
  "reset/resetPassword",
  (
    userData: { token: string; password1: string; password2: string },
    { rejectWithValue }
  ) => {
    return axios
      .patch(
        "https://quera.iran.liara.run/accounts/reset-password/set-password/",
        {
          token: userData.token,
          password: userData.password1,
          password1: userData.password2,
        }
      )
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const resetSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.error = "";
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.success = "";
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default resetSlice.reducer;
