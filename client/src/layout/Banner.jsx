import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";

const Banner = () => {
  return (
    <div className="bg-primary rounded-xl p-4 mb-3  border">
      <div className="flex justify-between items-center">
        <Search />
        <Filter />
      </div>
      <div>
        <h1>sjkbcavscu</h1>
      </div>
    </div>
  );
};

export default Banner;
