
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "apiData",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
    addBlogPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setData, addBlogPost } = dataSlice.actions;
export default dataSlice.reducer;

