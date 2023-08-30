import React from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import { CiHashtag } from "react-icons/ci";

const LeftBar = () => {
  return (
    <div className="sticky left-0 top-[5.5rem] h-fit w-full rounded-md border border-border-light bg-white py-2 dark:border-border dark:bg-primary p-4">
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
