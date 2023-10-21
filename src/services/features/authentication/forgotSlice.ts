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

export const forgetPassword = createAsyncThunk(
  "forget/forgetPassword",
  (userData: { email: string }, { rejectWithValue }) => {
    return axios
      .post("https://quera.iran.liara.run/accounts/reset-password/", {
        email: userData.email,
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const forgetSlice = createSlice({
  name: "forget",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(forgetPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
      state.error = "";
    });
    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.loading = false;
      state.success = "";
      state.error = String(action.payload) || "Something went wrong";
      console.log(action.payload);
    });
  },
});

export default forgetSlice.reducer;
