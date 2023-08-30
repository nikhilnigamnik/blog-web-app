import React from "react";
import Button from "../components/Button";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-4  rounded-md bg-primary  border ">
      <div className="flex gap-4 border-b border-border p-4">
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
      <div className="flex gap-4 border-b border-border p-4">
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
      <div className="flex gap-4 border-b border-border p-4">
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
      <div className="flex gap-4 border-b border-border p-4">
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
      <div className="flex gap-4 border-b border-border p-4">
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
  );
};

export default RightBar;
