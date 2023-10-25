import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
    name: string,
    description: string,
    deadline: string,
    priority: number,
    attachment: string,
    thumbnail: string,
    order: number,
    members: string,
    created_at: string,
    firstmodal:"hidden"|"block",
    tagmodal:"hidden"|"block",
    prioritymodal:"hidden"|'block',
    submit:false

};

const initialState:InitialState={
    name: "",
    description: "",
    deadline: "",
    priority: 0,
    attachment: "",
    thumbnail: "",
    order: 0,
    members: '',
    created_at: "",
    firstmodal:"hidden",
    tagmodal:"hidden",
    prioritymodal:"hidden",
    submit:false
}

const taskmodalSlice = createSlice({
  name: "taskmodal",
  initialState,
  reducers: {
    showfirstasktmodal:(state)=>{
      state.firstmodal="block";
    },
    // stepoen: (state, action) => {
    //   state.name = action.payload;
    //   state.modalone="invisible",
    //   state.modaltwo="visible",
    //   state.submit= false,
    //   console.log("one : ",state)
    // },
  },
});

export default taskmodalSlice.reducer;
export const { showfirstasktmodal } = taskmodalSlice.actions;
