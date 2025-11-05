import { createSlice } from "@reduxjs/toolkit";

// Props
type BlogBasicInfoProps = {
  slug: string;
  title: string;
};

// Init state
const initialState: BlogBasicInfoProps = {
  slug: "",
  title: "",
};

const blogSlice = createSlice({
  name: "BlogBasic",
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.slug = action.payload.slug;
      state.title = action.payload.title;
    },
    clearBlog: (state) => {
      ((state.slug = ""), (state.title = ""));
    },
  },
});

export const { setBlog, clearBlog } = blogSlice.actions;
export default blogSlice.reducer;
