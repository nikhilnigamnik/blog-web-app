import React from "react";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const BlogData = ({ title, image, description, id }) => {
  return (
    <>
      <div
        key={title}
        className="border rounded-xl p-2 flex flex-col justify-between"
      >
        <Link to={`/blog/${id}`}>
          <img
            src={image}
            className="aspect-video w-full rounded-md"
            alt="blogImage"
          />
        </Link>
        <div className="min-h-min p-3">
          <p className="mt-4 w-full text-xs font-semibold leading-tight">
            #{description}
          </p>
          <Link to={"/"}>
            <p className="mt-4 flex-1 text-base font-semibold ">{title}</p>
          </Link>
          <p className="mt-4 w-full text-sm leading-normal text-gray-400">
            {description}
          </p>
          <div className="mt-4 flex space-x-3 ">
            <img className="h-full w-10 rounded-lg" src={""} alt={""} />
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-300">
                {""}
                <span></span>
              </p>
              <p className="text-sm leading-tight text-gray-300">{""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const Blogs = () => {
  const data = useSelector((state) => state.apiData);
  return data.length == 0 ? (
    <div>Loading</div>
  ) : (
    <div className="border rounded-xl">
      <div className="p-4  rounded-xl grid gap-6  grid-cols-1  sm:grid-cols-2  ">
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
      <div className="flex items-center justify-center p-4">
        <a
          href="#"
          className="mx-1 cursor-not-allowed text-sm font-semibold text-text-primary"
        >
          <span className="hidden lg:block">&larr; Previous</span>
          <span className="block lg:hidden">&larr;</span>
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border  px-3 py-1 text-text-primary hover:scale-105"
        >
          1
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border  px-3 py-1 text-text-primaryhover:scale-105"
        >
          2
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border text-text-primary px-3 py-1 hover:scale-105"
        >
          3
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border  px-3 py-1 text-text-primary hover:scale-105"
        >
          4
        </a>
        <a href="#" className="mx-2 text-sm font-semibold text-text-primary">
          <span className="hidden lg:block">Next &rarr;</span>
          <span className="block lg:hidden">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default Blogs;
