import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ErrorProfile = () => {
  return (
    <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
      <div className="lg:flex lg:items-center lg:space-x-10">
        <div>
          <p className="mt-6 text-sm font-semibold ">Please Login</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-400 md:text-3xl">
            We can&apos;t find the account
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="mt-6 flex items-center space-x-3">
            <Link to={"/"}>
              <Button type="button">
                <ArrowLeft size={16} className="mr-2" />
                Go back
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button>
                Login
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorProfile;
