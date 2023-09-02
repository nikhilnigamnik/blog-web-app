import React from "react";

const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 tracking-wider cursor-pointer ${className} text-white   rounded-full px-4 py-1 border border-border hover:bg-primary-light bg-secondary   transition `}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
