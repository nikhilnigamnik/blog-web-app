import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 tracking-wider cursor-pointer ${className} text-white hover:rounded-md  rounded-full px-2 py-1 border border-border   transition `}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
