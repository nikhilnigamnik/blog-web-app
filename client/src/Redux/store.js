import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Slices/dataSlice";
import userBlogSlice from "./Slices/userBlogSlice";
import { authReducer } from "./Slices/authSlice";


const store = configureStore({
  reducer: {
    apiData: dataSlice,
    userBlog: userBlogSlice,
    auth: authReducer,
  },
});

export default store;
