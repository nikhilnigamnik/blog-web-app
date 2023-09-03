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
    // <div className="border p-4 rounded-xl flex flex-col justify-center">
    //   <img className="rounded-md" src={blogData.image} />
    //   <h2>{blogData.title}</h2>
    //   <p>{blogData.description}</p>
    // </div>
    <section className="relative overflow-hidden py-20">
      <div className="relative">
        <div className="mx-auto max-w-xl lg:max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">
              OUR BLOG
            </span>
            <h1 className="text-5xl font-bold">Latest news from our blog</h1>
          </div>
          <div className="my-18 -mx-4 flex flex-wrap px-4">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
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
          <div className="mt-14 text-center">
            <Button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDeatils;
