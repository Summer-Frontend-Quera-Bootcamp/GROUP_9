import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
  access: string;
};

const initialState: InitialState = {
  access: "",
};

export const fetchAccess = createAsyncThunk(
  "refresh/fetchAccess",
  (refreshData: { refresh: string }, { rejectWithValue }) => {
    return axios
      .post("https://quera.iran.liara.run/accounts/refresh/", {
        refresh: refreshData.refresh,
      })
      .then((response) => {
        console.log("full", refreshData.refresh);
        return response.data;
      })
      .catch((error) => {
        console.log("rej", refreshData.refresh);
        return rejectWithValue(error.response.data.detail);
      });
  }
);

const refreshSlice = createSlice({
  name: "refresh",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccess.fulfilled, (state, action) => {
      state.access = action.payload.access;
    });
    builder.addCase(fetchAccess.rejected, (state) => {
      state.access = "";
    });
  },
});

export default refreshSlice.reducer;
