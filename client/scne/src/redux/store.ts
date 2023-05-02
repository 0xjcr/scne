import { configureStore } from "@reduxjs/toolkit";
import SceneReducer from "./SceneSlice";
import AllUsersReducer from "./AllUsersSlice";

export const store = configureStore({
  reducer: {
    Scene: SceneReducer,
    AllUsers: AllUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
