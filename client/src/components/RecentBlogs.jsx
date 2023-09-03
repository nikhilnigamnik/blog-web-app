import React from "react";

const RecentBlogs = () => {
  return (
    <div className=" px-4 p-4 rounded-xl border lg:block hidden h-min">
      <h1 className="text-center mb-4">Recent Blogs</h1>
      <a className="group mb-8 md:flex" href="#">
        <img
          className="h-40 w-48 rounded-lg"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="my-4 pt-2 md:ml-6 md:mt-0">
          <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
          <h4 className="text-xl font-semibold ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h4>
        </div>
      </a>
      <a className="group mb-8 md:flex" href="#">
        <img
          className="h-40 w-48 rounded-lg"
          src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="my-4 pt-2 md:ml-6 md:mt-0">
          <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
          <h4 className="text-xl font-semibold ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h4>
        </div>
      </a>
      <a className="group mb-8 md:flex" href="#">
        <img
          className="h-40 w-48 rounded-lg"
          src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="my-4 pt-2 md:ml-6 md:mt-0">
          <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
          <h4 className="text-xl font-semibold ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h4>
        </div>
      </a>
    </div>
  );
};

export default RecentBlogs;
