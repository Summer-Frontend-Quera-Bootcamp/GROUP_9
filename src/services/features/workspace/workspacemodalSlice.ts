import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "zod";

const initialState = {
  name: "",
  color:"",
  submit:false
};

const workspacemodalSlice = createSlice({
  name: "workspacemodal",
  initialState,
  reducers: {
    Stepoen: (state, action) => {
      state.name = action.payload;
      console.log("one : ",state)
    },
    Steptwo: (state,action) => {
      state.color = action.payload;
      console.log("two : ",state)
    },
    Stepthree: (state) => {
        state.submit = true;
        console.log("three : ",state)
      },
  },
});

export default workspacemodalSlice.reducer;
export const { Stepoen, Steptwo,Stepthree } = workspacemodalSlice.actions;
