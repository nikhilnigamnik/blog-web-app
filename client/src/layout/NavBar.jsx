import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import { Link, NavLink } from "react-router-dom";
import { PiUserCircle } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { BsBezier } from "react-icons/bs";

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Trending",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Explore",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky left-0 top-0 z-40 w-full border-b border-border-light bg-white dark:border-border dark:bg-primary py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <NavLink to={"/"}>
            <span className="font-bold ">NEBULA</span>
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-between gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold  hover:text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <BsBezier
              className="hover:border border-border cursor-pointer rounded-full "
              size={24}
            />
            <CiBellOn
              className="hover:border border-border cursor-pointer rounded-full "
              size={24}
            />
            <Link to={"/user"}>
              <PiUserCircle
                className="hover:border border-border cursor-pointer rounded-full "
                size={24}
              />
            </Link>
          </div>
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer lg:hidden"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform px-2 transition lg:hidden py-4">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-primary shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold">NEBULA</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-secondary"
                      >
                        <span className="ml-3 text-base font-medium">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <NavLink to={"signup"}>
                    <Button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign In
                    </Button>
                  </NavLink>
                  <NavLink to={"login"}>
                    <Button
                      type="button"
                      className="w-full rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
