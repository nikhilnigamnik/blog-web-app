import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import RecentBlogs from "../components/RecentBlogs";

const BlogDeatils = () => {
  const { id } = useParams();
  const blogDeatail = useSelector((state) => state.apiData);
  const blogData = blogDeatail.find((blog) => blog._id === id);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative overflow-hidden py-6">
      <div className="relative">
        <div className="mx-auto max-w-xl lg:max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full  px-3 py-1 text-xs font-semibold bg-secondary">
              OUR BLOG
            </span>
            <h1 className="text-5xl font-bold">Latest news from our blog</h1>
          </div>
          <div className="flex justify-between gap-4 px-4">
            <div className="mb-12 w-full p-4 rounded-xl border ">
              <a className="group block w-full" href="#">
                <img
                  className="mb-5 block w-full rounded-lg"
                  src={blogData.image}
                  alt=""
                />
                <span className="mb-5 block text-gray-500">Jul 20, 2023</span>
                <div className="mt-4 flex space-x-3 ">
                  <img className="h-full w-10 rounded-lg" src={""} alt={""} />
                </div>
                <span>kjabs</span>
                <h4 className="mb-5 text-3xl font-semibold ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p className="max-w-xl text-lg text-text-primary">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  xercitation veniam consequat sunt nostrud amet.
                </p>
              </a>
            </div>
            <RecentBlogs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDeatils;
