import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => JSON.parse(localStorage.getItem("user"));
const getInitialToken = () => localStorage.getItem("token");

const initialState = {
  isLogin: false,
  user: getInitialUser(),
  token: getInitialToken(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.isLogin = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authSlice.reducer;
