import Link from "next/link";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BiCodeBlock, BiArrowBack } from "react-icons/bi";
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoCaretBackOutline,
} from "react-icons/io5";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";

const NavbarDashboard = () => {
  return (
    <nav className="space-y-2 bg-blue-500 p-2 h-screen w-0.5/4 fixed top-0 left-0 flex flex-col gap-5">
      <Link
        href="/dashboard"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <IoHomeOutline className="h-8 w-9" />
        <span className="text-md font-medium">Home</span>
      </Link>
      <Link
        href="/dashboard/languages"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <HiOutlineCode className="h-9 w-9" />
        <span className="text-md font-medium">Languages</span>
      </Link>
      <Link
        href="/dashboard/projects"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <AiOutlineFundProjectionScreen className="h-9 w-9" />
        <span className="text-md font-medium">Projects</span>
      </Link>
      <Link
        href="/dashboard/codeblocks"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <BiCodeBlock className="h-9 w-9" />
        <span className="text-md font-medium">Code Blocks</span>
      </Link>
      <Link
        href="/dashboard/links"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <AiOutlineLink className="h-9 w-9" />
        <span className="text-md font-medium">Links</span>
      </Link>
      <Link
        href="/dashboard/github"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <AiFillGithub className="h-9 w-9" />
        <span className="text-md font-medium">GitHub</span>
      </Link>
      <Link
        href="/dashboard/leetcode"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <TbBrandLeetcode className="h-9 w-9" />
        <span className="text-md font-medium">LeetCode</span>
      </Link>
      <div className="flex-grow"></div>
      <Link
        href="/settings"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <IoSettingsOutline className="h-7 w-9" />
        <span className="text-md font-medium">Settings</span>
      </Link>
      <Link
        href="/"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
      >
        <IoIosArrowRoundBack className="h-9 w-9" />
        <span className="text-md font-medium">Back</span>
      </Link>
    </nav>
  );
};

export default NavbarDashboard;
