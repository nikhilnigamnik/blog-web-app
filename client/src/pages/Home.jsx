import React from "react";
import Button from "../components/Button";
import Search from "../components/Search";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Search />
        <Filter/>
      </div>
      <div className="grid md:grid-cols-2 gap-4 shadows">
        <div className="p-4  rounded-md flex flex-col gap-4">
          <img
            className="rounded-md"
            width={700}
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
            alt="image"
          />
          <div className="flex items-center gap-4">
            <p className="bg-black w-10 h-10 rounded-full"></p>
            <div>
              <p>PhD Kim Witten</p>
              <p>6 min read · Aug 22</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Stop Trying to Manage Your Time
            </h1>
            <p>
              One of the biggest red herrings in most the productivity advice I
              see has to do with the relentless pursuit to control, wrangle,
              seek, carve out, or otherwise manage time.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 rounded-md">
          <div className="flex gap-4">
            <img
              className="rounded-md"
              width={200}
              src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg"
              alt="imagedata"
            />
            <div>
              <h1>Title</h1>
              <p>Description</p>
              <Button>View More</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="rounded-md"
              width={200}
              src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg"
              alt="imagedata"
            />
            <div>
              <h1>Title</h1>
              <p>Description</p>
              <Button>View More</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="rounded-md"
              width={200}
              src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg"
              alt="imagedata"
            />
            <div>
              <h1>Title</h1>
              <p>Description</p>
              <Button>View More</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="rounded-md"
              width={200}
              src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg"
              alt="imagedata"
            />
            <div>
              <h1>Title</h1>
              <p>Description</p>
              <Button>View More</Button>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              className="rounded-md"
              width={200}
              src="https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg"
              alt="imagedata"
            />
            <div>
              <h1>Title</h1>
              <p>Description</p>
              <Button>View More</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-3">
        <div className="p-4  rounded-md flex flex-col gap-4">
          <img
            className="rounded-md"
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
            alt="image"
          />
          <div className="flex items-center gap-4">
            <p className="bg-black w-10 h-10 rounded-full"></p>
            <div>
              <p>PhD Kim Witten</p>
              <p>6 min read · Aug 22</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Stop Trying to Manage Your Time
            </h1>
            <p>
              One of the biggest red herrings in most the productivity advice I
              see has to do with the relentless pursuit to control, wrangle,
              seek, carve out, or otherwise manage time.
            </p>
          </div>
        </div>
        <div className="p-4  rounded-md flex flex-col gap-4">
          <img
            className="rounded-md"
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
            alt="image"
          />
          <div className="flex items-center gap-4">
            <p className="bg-black w-10 h-10 rounded-full"></p>
            <div>
              <p>PhD Kim Witten</p>
              <p>6 min read · Aug 22</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Stop Trying to Manage Your Time
            </h1>
            <p>
              One of the biggest red herrings in most the productivity advice I
              see has to do with the relentless pursuit to control, wrangle,
              seek, carve out, or otherwise manage time.
            </p>
          </div>
        </div>
        <div className="p-4  rounded-md flex flex-col gap-4">
          <img
            className="rounded-md"
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
            alt="image"
          />
          <div className="flex items-center gap-4">
            <p className="bg-black w-10 h-10 rounded-full"></p>
            <div>
              <p>PhD Kim Witten</p>
              <p>6 min read · Aug 22</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Stop Trying to Manage Your Time
            </h1>
            <p>
              One of the biggest red herrings in most the productivity advice I
              see has to do with the relentless pursuit to control, wrangle,
              seek, carve out, or otherwise manage time.
            </p>
          </div>
        </div>
        <div className="p-4  rounded-md flex flex-col gap-4">
          <img
            className="rounded-md"
            src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
            alt="image"
          />
          <div className="flex items-center gap-4">
            <p className="bg-black w-10 h-10 rounded-full"></p>
            <div>
              <p>PhD Kim Witten</p>
              <p>6 min read · Aug 22</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">
              Stop Trying to Manage Your Time
            </h1>
            <p>
              One of the biggest red herrings in most the productivity advice I
              see has to do with the relentless pursuit to control, wrangle,
              seek, carve out, or otherwise manage time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
