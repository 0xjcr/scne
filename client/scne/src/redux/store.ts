import { configureStore } from "@reduxjs/toolkit";
import SceneReducer from "./SceneSlice";

export const store = configureStore({
  reducer: {
    Scene: SceneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
