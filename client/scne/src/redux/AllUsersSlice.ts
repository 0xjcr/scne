import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/userType";

const initialState: UserType[] = [];
export const AllUsersSlice = createSlice({
  name: "AllUser",
  initialState,
  reducers: {
    setAllUsers: (_, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});
export const { setAllUsers } = AllUsersSlice.actions;
export default AllUsersSlice.reducer;
