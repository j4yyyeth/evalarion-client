"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeBtn from "./ThemeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-semibold">
          Logo
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href="/signin" className="text-white hover:text-gray-300">
            Sign In
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-gray-300"
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
        <ThemeBtn />
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link
            href="/about"
            className="block text-white hover:text-gray-300 px-4 py-2"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-300 px-4 py-2"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="block text-white hover:text-gray-300 px-4 py-2"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
