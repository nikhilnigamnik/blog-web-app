import { createSlice } from "@reduxjs/toolkit";

const userBlogSlice = createSlice({
  name: "userBlog",
  initialState: [],
  reducers: {
    setUserBlog: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserBlog } = userBlogSlice.actions;
export default userBlogSlice.reducer;
