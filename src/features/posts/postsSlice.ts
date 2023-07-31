import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Post {
  id: string;
  title: string;
  content: string;
}

const initialStateValue: Post[] = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "This is learning Redux Toolkit content!",
  },
  { id: "2", title: "Slices...", content: "This content is about slices..." },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialStateValue,
  reducers: {
    addNewPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;
export const { addNewPost } = postsSlice.actions;
export default postsSlice.reducer;
