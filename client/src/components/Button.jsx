import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 tracking-wider cursor-pointer ${className} text-white hover:rounded-md  rounded px-2 py-1 bg-black  transition `}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
