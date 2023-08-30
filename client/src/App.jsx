import React from "react";
import { Outlet } from "react-router-dom";
import {NavBar} from "./layout/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="w-[90%] m-auto mt-24">
        <Outlet />
      </div>
    </>
  );
};

export default App;
