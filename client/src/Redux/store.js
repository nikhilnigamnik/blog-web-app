import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import { authReducer } from "./authSlice";
import userBlogSlice from "./userBlogSlice";

const store = configureStore({
  reducer: {
    apiData: DataSlice,
    userBlog: userBlogSlice,
    auth: authReducer,
  },
});

export default store;
