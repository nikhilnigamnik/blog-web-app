import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
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

export const { setData, addBlogPost } = DataSlice.actions;
export default DataSlice.reducer;
