import React from "react";
import LeftBar from "./LeftBar";
import Blogs from "./Blogs";
import RightBar from "./RightBar";
import Banner from "./Banner";
import RecentBlogs from "../components/RecentBlogs";
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
        <RecentBlogs/>
      </div>
    </div>
  );
};

export default Hero;
