import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";

const Blogs = () => {
  const data = useSelector((state) => state.apiData);
  return (
    <div className="p-4  rounded-md flex flex-col gap-4 bg-primary  border ">
      <div className="flex items-center justify-between">
        <Search/>
        <Filter/>
      </div>
      <img
        className="rounded-md"
        src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
        alt="image"
      />
      <div className="flex items-center gap-4">
        <p className="bg-black w-10 h-10 rounded-full"></p>
        <div>
          <p>PhD Kim Witten</p>
          <p>6 min read · Aug 22</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Stop Trying to Manage Your Time</h1>
        <p>
          One of the biggest red herrings in most the productivity advice I see
          has to do with the relentless pursuit to control, wrangle, seek, carve
          out, or otherwise manage time.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
