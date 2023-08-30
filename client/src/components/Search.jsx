import React from "react";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className=" border  border-border rounded-full  flex items-center  gap-4 px-4 py-2">
      <CiSearch size={25} color="#2c3646" />
      <input
        placeholder="Search For Development"
        className="outline-none bg-transparent"
        type="search"
        name=""
        id=""
      />
    </div>
  );
};

export default Search;
