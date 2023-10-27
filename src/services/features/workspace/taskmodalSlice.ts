import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  name: string;
  description: string;
  deadline: string;
  priority: number;
  attachment: string;
  thumbnail: string;
  order: number;
  members: string;
  created_at: string;
  firstmodal: "hidden" | "visible";
  tagmodal: boolean;
  prioritymodal: boolean;
  calendermodal: boolean;
  submit: false;
};

const initialState: InitialState = {
  name: "",
  description: "",
  deadline: "",
  priority: 0,
  attachment: "",
  thumbnail: "",
  order: 0,
  members: "",
  created_at: "",
  firstmodal: "hidden",

  tagmodal: false,
  prioritymodal: false,
  calendermodal: false,
  submit: false,
};

const taskmodalSlice = createSlice({
  name: "taskmodal",
  initialState,
  reducers: {
    showfirstasktmodal: (state) => {
      state.firstmodal = "visible";
    },
    hidefirstasktmodal: (state) => {
      state.firstmodal = "hidden";
    },
    showpriority: (state) => {
      state.prioritymodal = !state.prioritymodal;
    },
    showtag: (state) => {
      state.tagmodal = !state.tagmodal;
    },
    showcalender: (state) => {
      state.calendermodal = !state.calendermodal;
    },
    setpriority: (state, action) => {
      state.priority = action.payload;
      console.log(action.payload);
    },
    setDescription: (state, action) => {
      state.description = action.payload;
      console.log(action.payload);
    },
    setname: (state, action) => {
      state.name = action.payload;
      console.log(action.payload);
    },
  },
});

export default taskmodalSlice.reducer;
export const {
  showfirstasktmodal,
  hidefirstasktmodal,
  setDescription,
  setpriority,
  showpriority,
  showcalender,
  showtag,
  setname,
} = taskmodalSlice.actions;
