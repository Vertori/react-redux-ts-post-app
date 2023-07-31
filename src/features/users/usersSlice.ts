import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface User {
  id: string;
  name: string;
}

const initialState: User[] = [
  { id: "0", name: "Selena Gomez" },
  { id: "1", name: "Michael Jordan" },
  { id: "2", name: "Johnny Depp" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;
export const {} = usersSlice.actions;
export default usersSlice.reducer;
