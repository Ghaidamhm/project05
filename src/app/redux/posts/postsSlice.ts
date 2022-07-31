import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../../types/types";
import { postsStaticData } from "../../../data/postsData";

const initialState = {
  posts: [...postsStaticData],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
  },
});

export default postSlice.reducer;
export const { createPost } = postSlice.actions;