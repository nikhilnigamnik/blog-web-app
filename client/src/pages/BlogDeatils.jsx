import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BlogDeatils = () => {
  const { id } = useParams();
  const blogDeatail = useSelector((state) => state.apiData);
  const blogData = blogDeatail.find((blog) => blog._id === id);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border p-4 rounded-xl flex flex-col justify-center">
      <img className="rounded-md" src={blogData.image} />
      <h2>{blogData.title}</h2>
      <p>{blogData.description}</p>
    </div>
  );
};

export default BlogDeatils;
