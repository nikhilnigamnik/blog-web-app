import React from "react";
import LeftBar from "./LeftBar";
import Blogs from "./Blogs";
import RightBar from "./RightBar";

const Hero = () => {
  return (
    <div className="flex justify-between overflow-hidden gap-6 grids">
      <div className="hidden lg:block">
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
