import { AXIOS } from "../../../config/axios.config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
  old_password?: string;
  new_password?: string;
  new_password1?: string;
};

const initialState: InitialState = {
  old_password: "",
  new_password: "",
  new_password1: "",
};

export const changepassword = createAsyncThunk(
  "accounts/change-password",
  (
    changepassword: {
      old_password?: string;
      new_password?: string;
      new_password1?: string;
    },
    { rejectWithValue }
  ) => {
    return AXIOS.put(`accounts/change-password/`, {
      old_password: changepassword.old_password,
      new_password: changepassword.new_password,
      new_password1: changepassword.new_password1,
    })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const changepasswordSlice = createSlice({
  name: "changepassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changepassword.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(changepassword.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default changepasswordSlice.reducer;
