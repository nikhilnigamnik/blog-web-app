import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./layout/NavBar";

const App = () => {
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
