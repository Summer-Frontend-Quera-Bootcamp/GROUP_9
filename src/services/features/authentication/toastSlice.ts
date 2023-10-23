import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const toastSlice = createSlice({
  name: "authToast",
  initialState,
  reducers: {
    showToast: (state, value) => {
      state.text = value.payload;
    },
    hideToast: (state) => {
      state.text = "";
    },
  },
});

export default toastSlice.reducer;
export const { showToast, hideToast } = toastSlice.actions;
