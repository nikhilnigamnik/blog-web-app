import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogDeatils = () => {
  const { id } = useParams();
  const blogDeatail = useSelector((state) => state.apiData);
  console.log(blogDeatail);
  return (
    <div>
      <h1>Blog Details - {id}</h1>
    </div>
  );
};

export default BlogDeatils;
