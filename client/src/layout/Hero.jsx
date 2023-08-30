import React from "react";
import LeftBar from "./LeftBar";
import Blogs from "./Blogs";
import RightBar from "./RightBar";

const Hero = () => {
  return (
    <div className="grids">
      <div className="lg:block hidden">
        <LeftBar />
      </div>
      <div>
        <Blogs />
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default Hero;
