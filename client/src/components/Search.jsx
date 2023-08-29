import React from "react";
import Button from "./Button";

const Search = () => {
  return (
    <div className="px-4 py-1 border rounded-lg flex items-center my-2">
      <input
        placeholder="Search Blog"
        className="outline-none"
        type="search"
        name=""
        id=""
      />
      <Button>Search</Button>
    </div>
  );
};

export default Search;
