import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./layout/NavBar";
import { useDispatch } from "react-redux";
import { setData } from "./Redux/DataSlice";
import axios from "axios";
import { apiUrl } from "./utils/Api";

const App = () => {
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
    </>
  );
};

export default App;
