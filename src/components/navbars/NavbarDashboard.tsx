import Link from "next/link";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BiCodeBlock } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const NavbarDashboard = () => {
  return (
    <nav className="space-y-2 bg-blue-200 p-4 h-screen w-0.5/4 fixed top-0 left-0 flex flex-col">
      <Link
        href="/"
        className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
      >
        <AiFillHome className="h-7 w-7" />
        <span className="text-sm font-medium">Home</span>
      </Link>
      <Link
        href="/languages"
        className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
      >
        <FaCode className="h-7 w-7" />
        <span className="text-sm font-medium">Languages</span>
      </Link>
      <Link
        href="/projects"
        className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
      >
        <HiLightBulb className="h-7 w-7" />
        <span className="text-sm font-medium">Projects</span>
      </Link>
      <Link
        href="/code"
        className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
      >
        <BiCodeBlock className="h-7 w-7" />
        <span className="text-sm font-medium">Code Blcoks</span>
      </Link>
      <Link
        href="/github"
        className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
      >
        <AiFillGithub className="h-7 w-7" />
        <span className="text-sm font-medium">GitHub</span>
      </Link>
      <Link
        href="/leetcode"
        className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500"
      >
        <SiLeetcode className="h-7 w-7" />
        <span className="text-sm font-medium">LeetCode</span>
      </Link>
    </nav>
  );
};

export default NavbarDashboard;
