import { createSlice } from "@reduxjs/toolkit";
const initialState = "coffee";
export const SceneSlice = createSlice({
  name: "scene",
  initialState,
  reducers: {
    setScene: (_, action) => {
      console.log("is this the current Scene: ", action.payload);
      return action.payload;
    },
  },
});
export const { setScene } = SceneSlice.actions;
export default SceneSlice.reducer;
