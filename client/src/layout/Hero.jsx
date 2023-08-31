import React from "react";
import LeftBar from "./LeftBar";
import Blogs from "./Blogs";
import RightBar from "./RightBar";
import Banner from "./Banner";
const Hero = () => {
  return (
    <div className="grids">
      <div className="lg:block hidden">
        <LeftBar />
      </div>
      <div>
        <Banner />
        <Blogs />
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default Hero;
