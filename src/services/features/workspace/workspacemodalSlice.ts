import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  color:"",
  submit: false,
  modalone: "invisible" ,
  modaltwo: "invisible" ,
  modalthree: "invisible"
};

const workspacemodalSlice = createSlice({
  name: "workspacemodal",
  initialState,
  reducers: {
    closemodal:(state)=>{
      console.log("close close ")
      state.name= "",
      state.color="",
      state.submit= false,
      state.modalone= "invisible" ,
      state.modaltwo= "invisible" ,
      state.modalthree= "invisible"
    },
    showfirstmodal:(state)=>{
      state.modalone="visible";
      state.modaltwo="invisible";
      state.modalthree="invisible";
      state.submit= false
    },
    showsecondmodal:(state)=>{
      state.modalone="invisible";
      state.modaltwo="visible";
      state.modalthree="invisible";
      state.submit= false
    },
    showthiredmodal:(state)=>{
      state.modalone="invisible";
      state.modaltwo="invisible";
      state.modalthree="visible"
    },
    stepoen: (state, action) => {
      state.name = action.payload;
      state.modalone="invisible",
      state.modaltwo="visible",
      state.submit= false,
      console.log("one : ",state)
    },
    steptwo: (state,action) => {
      state.color = action.payload;
      state.modaltwo="invisible",
      state.modalthree="visible",
      state.submit= false,
      console.log("two : ",state)
    },
    stepthree: (state) => {
        state.submit = true;
        state.modalthree="invisible",
        state.modalone="invisible",
        state.modaltwo="invisible"
        console.log("three : ",state)
      },
  },
});

export default workspacemodalSlice.reducer;
export const { stepoen, steptwo,stepthree,showfirstmodal,showsecondmodal,showthiredmodal,closemodal } = workspacemodalSlice.actions;
