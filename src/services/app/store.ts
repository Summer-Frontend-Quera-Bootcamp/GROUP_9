import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/loginSlice";
import registerReducer from "../features/authentication/registerSlice";
import resetReducer from "../features/authentication/resetSlice";
import forgetReducer from "../features/authentication/forgotSlice";
import authToastReducer from "../features/authentication/toastSlice";
import refreshReducer from "../features/authentication/refreshSlice";
// const listenerMiddleware = createListenerMiddleware();
// listenerMiddleware.startListening({
//   predicate: (action, currState, prevState) =>
//     action?.AxiosError?.message === "Request failed with status code 401",
//   effect: (_, { dispatch, condition }) => {
//     console.log(condition);
//     dispatch(fetchAccess({ refresh: String(localStorage.getItem("refresh")) }));
//   },
// });

const localStorageMiddleware = ({ getState }: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    getState().refresh.access
      ? localStorage.setItem("access", getState().refresh.access)
      : getState().user.access
      ? localStorage.setItem("access", getState().user.access)
      : null;
    getState().user.refresh
      ? localStorage.setItem("refresh", getState().user.refresh)
      : null;
    return result;
  };
};

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    reset: resetReducer,
    forget: forgetReducer,
    authToast: authToastReducer,
    refresh: refreshReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
