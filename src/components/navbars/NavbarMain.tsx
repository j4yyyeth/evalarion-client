"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  const pagesWithoutNavbar = [
    "/dashboard",
    "/dashboard/signup",
    "/dashboard/signin",
    "/dashboard/languages",
    "/dashboard/projects",
    "/dashboard/codeblocks",
    "/dashboard/links",
    "/dashboard/github",
    "/dashboard/leetcode",
  ];
  const shouldShowNavbar = !pagesWithoutNavbar.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!shouldShowNavbar) {
    return null;
  }
  return (
    <nav
      className={`${
        isSticky ? "bg-white shadow-md" : "bg-white shadow-sm"
      } p-4 w-full fixed top-0 left-0 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-blue-500 text-2xl font-semibold">
          Logo
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-blue-500 hover:text-gray-500">
            About
          </Link>
          <Link href="/contact" className="text-blue-500 hover:text-gray-500">
            Contact
          </Link>
          <Link href="/signin" className="text-blue-500 hover:text-gray-500">
            Sign In
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-blue-500 focus:outline-none focus:text-gray-500"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link
            href="/about"
            className="block text-blue-500 hover:text-gray-500 px-4 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-blue-500 hover:text-gray-500 px-4 py-2"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="block text-blue-500 hover:text-gray-500 px-4 py-2"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
