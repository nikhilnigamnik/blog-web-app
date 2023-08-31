import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogData = ({ title, image, description, id }) => {
  return (
    <Link to={`/blog/${description}`}>
      <div>
        <img src={image} alt="images" />
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

const Blogs = () => {
  const data = useSelector((state) => state.apiData);
  return data.length == 0 ? (
    <div>Loading</div>
  ) : (
    <div className="p-4  rounded-md flex flex-col gap-4 bg-primary  border ">
      {data.map((blog) => (
        <BlogData
          key={blog._id}
          id={blog._id}
          title={blog?.title}
          image={blog?.image}
          description={blog?.description}
        />
      ))}
    </div>
  );
};

export default Blogs;
