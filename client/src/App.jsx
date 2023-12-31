import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./layout/NavBar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "./utils/Api";
import Footer from "./layout/Footer";
import { setData } from "./Redux/Slices/dataSlice";


const App = () => {
  const user = useSelector((state) => state.auth.user);
  // All Blogs
  const dispatch = useDispatch();

  useEffect(() => {
    const Url = `${apiUrl}/api/blog/blogs`;
    axios
      .get(Url)
      .then((response) => {
        dispatch(setData(response.data.blogs));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-[98%] m-auto mt-4">
        <Outlet />
      </div>
      <Footer />
      
    </>
  );
};

export default App;
