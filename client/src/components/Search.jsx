import React from "react";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";
import useSearch from "../Hooks/useSearch";

const Search = () => {
  const { query, handleSearch, data } = useSearch([]);
  return (
    <div className=" border  border-border rounded-full  flex items-center  gap-4 px-2 sm:px-4 py-2">
      <CiSearch size={25} color="#2c3646" />
      <input
        placeholder="Search For Development"
        className="outline-none bg-transparent"
        value={query}
        type="search"
        name=""
        onChange={(e) => handleSearch(e.target.value)}
        id=""
      />
    </div>
  );
};

export default Search;
