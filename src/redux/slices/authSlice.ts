import { createSlice } from "@reduxjs/toolkit";

// Init state
const initialState = {
  user: null,
  token: null,
  expires: null,
  isAuthor: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user, strapiToken, expires } = action.payload;
      state.user = user;
      state.token = strapiToken;
      state.expires = expires;
      state.isAuthor = Boolean(user?.isAuthor);
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.expires = null;
      state.isAuthor = false;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
