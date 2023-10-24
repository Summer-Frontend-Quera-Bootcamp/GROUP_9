import { createSlice } from "@reduxjs/toolkit";

interface IprojectModal {
  id: number;
  text: string;
  visibility: "invisible" | "visible";
}
const initialState: IprojectModal = {
  id: 0,
  text: "",
  visibility: "invisible",
};

const createProjectSlice = createSlice({
  name: "projectModal",
  initialState,
  reducers: {
    setId: (state, value) => {
      state.id = value.payload;
    },
    called: (state) => {
      state.visibility = "visible";
    },
    calledOff: (state) => {
      state.visibility = "invisible";
    },
    textAdded: (state, value) => {
      state.text = value.payload;
    },
  },
});

export default createProjectSlice.reducer;
export const { called, calledOff, textAdded, setId } =
  createProjectSlice.actions;
