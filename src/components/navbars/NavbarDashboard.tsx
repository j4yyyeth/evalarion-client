import Link from "next/link";
import { AiFillGithub, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BiCodeBlock, BiArrowBack } from "react-icons/bi";
import { IoHomeOutline, IoSettingsOutline, IoCaretBackOutline } from "react-icons/io5"
import { TbBrandLeetcode } from "react-icons/tb"
import { IoIosArrowRoundBack } from "react-icons/io";

const NavbarDashboard = () => {
  return (
    <nav className="space-y-2 bg-blue-500 p-2 h-screen w-0.5/4 fixed top-0 left-0 flex flex-col gap-5">
      <Link
        href="/dashboard"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <IoHomeOutline className="h-8 w-9" />
        <span className="text-md font-medium">Home</span>
      </Link>
      <Link
        href="/languages"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <HiOutlineCode className="h-9 w-9" />
        <span className="text-md font-medium">Languages</span>
      </Link>
      <Link
        href="/projects"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <AiOutlineFundProjectionScreen className="h-9 w-9" />
        <span className="text-md font-medium">Projects</span>
      </Link>
      <Link
        href="/codeblocks"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <BiCodeBlock className="h-9 w-9" />
        <span className="text-md font-medium">Code Blocks</span>
      </Link>
      <Link
        href="/github"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <AiFillGithub className="h-9 w-9" />
        <span className="text-md font-medium">GitHub</span>
      </Link>
      <Link
        href="/leetcode"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <TbBrandLeetcode className="h-9 w-9" />
        <span className="text-md font-medium">LeetCode</span>
      </Link>
      {/* <Link
        href="/"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <IoIosArrowRoundBack className="h-9 w-9" />
        <span className="text-md font-medium">Back</span>
      </Link>
      <Link
        href="/settings"
        className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200"
      >
        <IoSettingsOutline className="h-7 w-9" />
        <span className="text-md font-medium">Settings</span>
      </Link> */}
    </nav>
  );
};

export default NavbarDashboard;
