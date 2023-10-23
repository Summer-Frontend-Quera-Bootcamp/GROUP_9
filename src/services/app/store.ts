import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/authentication/loginSlice";
import registerReducer from "../features/authentication/registerSlice";
import resetReducer from "../features/authentication/resetSlice";
import forgetReducer from "../features/authentication/forgotSlice";
import authToastReducer from "../features/authentication/toastSlice";
import workSpaceReducer from '../features/workspace/workspaceSlice';
import projectReducer from '../features/workspace/projectsSlice'
import refreshReducer from "../features/authentication/refreshSlice";
import taskReducer from '../features/workspace/taskSlice';
import boardReducer from '../features/workspace/boardSlice';
import taskmemberReducer from '../features/workspace/taskmemberSlice';
import taskcommentReducer from '../features/workspace/taskcommentSlice';
import tasklogsReducer from '../features/workspace/tasklogSlice';
import subscription from '../features/workspace/subscriptionSlice'
import workspacemembersReducer from '../features/workspace/workspacemembersSlice'
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
    workspace: workSpaceReducer,
    project: projectReducer,
    refresh: refreshReducer,
    task:taskReducer,
    board:boardReducer,
    taskmember:taskmemberReducer,
    taskcommente:taskcommentReducer,
    tasklog:tasklogsReducer,
    subscription:subscription,
    workspacemembers:workspacemembersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
