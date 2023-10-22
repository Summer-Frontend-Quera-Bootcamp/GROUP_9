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
    userData: { token: string | null; password1: string; password2: string },
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
      .catch((error) =>
        rejectWithValue(
          JSON.parse(error.response.request.response).details
            ? JSON.parse(error.response.request.response).details[0]
            : JSON.parse(error.response.request.response).password
            ? JSON.parse(error.response.request.response).password[0]
            : JSON.parse(error.response.request.response).password1
            ? JSON.parse(error.response.request.response).password1[0]
            : null
        )
      );
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
      state.error = String(action.payload) || "Something went wrong";
    });
  },
});

export default resetSlice.reducer;
