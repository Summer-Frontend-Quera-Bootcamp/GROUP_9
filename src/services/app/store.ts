import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/loginSlice";
import registerReducer from "../features/authentication/registerSlice";
import resetReducer from "../features/authentication/resetSlice";
import forgetReducer from "../features/authentication/forgotSlice";
import authToastReducer from "../features/authentication/toastSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    reset: resetReducer,
    forget: forgetReducer,
    authToast: authToastReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
