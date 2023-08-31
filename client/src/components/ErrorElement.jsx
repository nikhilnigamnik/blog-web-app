import React from "react";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const ErrorElement = () => {
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-3xl font-semibold ">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page youre looking for.
        </p>
        <div className="mt-4 flex items-center justify-center gap-x-3">
          <NavLink to={"/"}>
            <Button className={"px-3"}>
              <ArrowLeft size={16} className="mr-2" />
              Go back
            </Button>
          </NavLink>
          <NavLink to={"/contact"}>
            <Button className={"px-3"} >Contact us</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
