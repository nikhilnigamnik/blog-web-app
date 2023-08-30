import React, { useState, useEffect, useRef } from "react";
import { BsFilterRight } from "react-icons/bs";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);

  const filterHandler = () => {
    setShowFilter(!showFilter);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowFilter(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={filterRef}>
      <div
        onClick={filterHandler}
        className="flex gap-2 items-center cursor-pointer"
      >
        <BsFilterRight size={22} />
        <span>Filter</span>
      </div>
      {showFilter && (
        <div className="absolute flex flex-col gap-2 bg-primary px-4 py-2 right-0 border rounded-md">
          <p className="border-b border-b-border">Development</p>
          <p className="border-b border-b-border">Development</p>
          <p className="border-b border-b-border">Development</p>
          <p className="border-b border-b-border">Development</p>
          <p className="border-b border-b-border">Development</p>
          <p className="border-b border-b-border">Development</p>
          
        </div>
      )}
    </div>
  );
};

export default Filter;
