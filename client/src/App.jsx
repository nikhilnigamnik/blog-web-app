import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./layout/NavBar";
import { useDispatch } from "react-redux";
import { setData } from "./Redux/DataSlice";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/blog/blogs";

    axios
      .get(apiUrl)
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
    </>
  );
};

export default App;
