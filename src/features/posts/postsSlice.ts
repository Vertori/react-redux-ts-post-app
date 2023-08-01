import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string | undefined;
  date?: string | undefined;
}

const initialStateValue: Post[] = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "This is learning Redux Toolkit content!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Slices...",
    content: "This content is about slices...",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialStateValue,
  reducers: {
    addNewPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;
export const { addNewPost } = postsSlice.actions;
export default postsSlice.reducer;
