import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "apiData",
  initialState: [],
  reducers: {
    // all blogs
    setData: (state, action) => {
      return action.payload;
    },
  
    // add blog
    addBlogPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setData, addBlogPost } = dataSlice.actions;
export default dataSlice.reducer;
