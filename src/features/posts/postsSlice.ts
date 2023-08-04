import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sub } from "date-fns";

export interface ReactionsType {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

interface Post {
  id: string;
  title: string;
  content: string;
  userId?: string | undefined;
  date?: string | undefined;
  reactions: ReactionsType;
}

const initialStateValue: Post[] = [
  {
    id: "1",
    title: "First Default Post",
    content: "This is first default post!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Second Default Post",
    content: "This is second default post...",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(
      state,
      action: PayloadAction<{ postId: string; reaction: keyof ReactionsType }>
    ) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;
export const { addNewPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
