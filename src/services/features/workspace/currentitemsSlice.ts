import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 workspace_id:NaN,
 project_id:NaN,
 board_id:NaN,
 task_id:NaN
};

const currentitemsSlice = createSlice({
  name: "currentitem",
  initialState,
  reducers: {
    current_workspace:(state,action)=>{
        state.workspace_id = Number(action.payload);
        state.project_id = NaN;
        state.board_id = NaN;
        state.task_id = NaN;
        console.log("action in space is : ",action.payload)
    },
    current_project:(state,action)=>{
        state.project_id = Number(action.payload);
        state.board_id = NaN;
        state.task_id = NaN;
        console.log("action in project is : ",action.payload)
    },
    current_board:(state,action)=>{
        state.board_id = Number(action.payload);
        state.task_id = NaN;
    },
    current_task:(state,action)=>{
        state.task_id = Number(action.payload);
    }
  },
});

export default currentitemsSlice.reducer;
export const { current_board,current_project,current_task,current_workspace } = currentitemsSlice.actions;
