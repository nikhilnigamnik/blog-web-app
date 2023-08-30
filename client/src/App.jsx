import React from "react";
import { Outlet } from "react-router-dom";
import {NavBar} from "./layout/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="w-11/12 m-auto mt-6">
        <Outlet />
      </div>
    </>
  );
};

export default App;
