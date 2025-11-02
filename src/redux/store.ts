import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import mainBlogAuthorSlice from "./slices/mainBlogAuthorSlice";
import blogSlice from "./slices/blogSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    mainBlogAuthor: mainBlogAuthorSlice,
    blogBasicInfo: blogSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
