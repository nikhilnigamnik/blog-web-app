import React from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import { CiHashtag } from "react-icons/ci";

const LeftBar = () => {
  return (
    <div className="bg-primary border p-4 rounded-md hidden lg:block max-h-min ">
      <h1 className="text-center mb-2 font-semibold text-xl">Explore</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <BsBookmarkHeart />
          <h1>Bookmark</h1>
        </div>
        <div className="flex items-center gap-4">
          <CiHashtag />
          <h1>Tags</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
