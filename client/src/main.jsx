import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./layout/Hero.jsx";
import store from "./Redux/store.js";
import { Provider } from "react-redux";
import NewBlog from "./pages/NewBlog.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import BlogDeatils from "./pages/BlogDeatils.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/newblog",
        element: <NewBlog />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
      {
        path: "/blog/:id",
        element: <BlogDeatils />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement />
  </Provider>
);
