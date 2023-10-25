import axios, { Axios } from "axios";
import { AXIOS } from "../../../config/axios.config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import store from "../../app/store";

type InitialState = {
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
};

const initialState: InitialState = {
  first_name: "",
  last_name: "",
  phone_number: "",
};

export const editprofile = createAsyncThunk(
  "profile/edit",
  (
    profile: {
      username?: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      phone_number?: string;
    },
    { rejectWithValue }
  ) => {
    return AXIOS.patch(`accounts/${localStorage.id}/`, {
      username: profile.username,
      email: profile.email,
      first_name: profile.first_name,
      last_name: profile.last_name,
      phone_number: profile.phone_number,
    })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //builder.addCase(editprfile.pending, (state) => {});
    builder.addCase(editprofile.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(editprofile.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default profileSlice.reducer;
