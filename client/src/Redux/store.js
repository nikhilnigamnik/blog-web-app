import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import { authReducer } from "./authSlice";


const store = configureStore({
  reducer: {
    apiData: DataSlice,
    auth: authReducer,
  },
});

export default store;
