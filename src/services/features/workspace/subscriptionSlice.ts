import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AXIOS } from "../../../config/axios.config";

export type InitialState = {
    id: number,
    email:string,
    url:string
  };
  
  const initialState: InitialState[] = [];

export const newtaskcomment = createAsyncThunk<any,any>(
  "taskcomment/new",
  (board:{email:string,url:string} , { rejectWithValue }) => {

    return AXIOS
      .post(`workspaces/subscriptions`, {
        eamil:board.email,
        url:board.url
      })
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data.detail));
  }
);


const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newtaskcomment.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("new subscription",state)
    });
  },
});

export default subscriptionSlice.reducer;
