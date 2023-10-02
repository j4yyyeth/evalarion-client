import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineCode } from "react-icons/hi";
import { BiCodeBlock } from "react-icons/bi";
import {
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";
import { LuWallpaper } from "react-icons/lu";

const NavbarDashboard = () => {
  return (
    // <nav className="space-y-2 bg-blue-500 p-2 h-screen w-0.5/4 fixed top-0 left-0 flex flex-col gap-5">
    //   <Link
    //     href="/dashboard"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <IoHomeOutline className="h-8 w-9" />
    //     <span className="text-md font-medium">Home</span>
    //   </Link>
    //   <Link
    //     href="/dashboard/languages"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <HiOutlineCode className="h-9 w-9" />
    //     <span className="text-md font-medium">Languages</span>
    //   </Link>
    //   <Link
    //     href="/dashboard/projects"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <LuWallpaper className="h-9 w-9" />
    //     <span className="text-md font-medium">Projects</span>
    //   </Link>
    //   <Link
    //     href="/dashboard/codeblocks"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <BiCodeBlock className="h-9 w-9" />
    //     <span className="text-md font-medium">Code Blocks</span>
    //   </Link>
    //   <Link
    //     href="/dashboard/links"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <AiOutlineLink className="h-9 w-9" />
    //     <span className="text-md font-medium">Links</span>
    //   </Link>
    //   <Link
    //     href="/dashboard/github"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <AiFillGithub className="h-9 w-9" />
    //     <span className="text-md font-medium">GitHub</span>
    //   </Link>
    //   <Link
    //     href="/dashboard/leetcode"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <TbBrandLeetcode className="h-9 w-9" />
    //     <span className="text-md font-medium">LeetCode</span>
    //   </Link>
    //   <div className="flex-grow"></div>
    //   <Link
    //     href="/settings"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <IoSettingsOutline className="h-7 w-9" />
    //     <span className="text-md font-medium">Settings</span>
    //   </Link>
    //   <Link
    //     href="/"
    //     className="w-full flex items-center space-x-2 hover:bg-gray-800 transition-transform active:bg-gray-100 py-2 px-2 rounded-lg text-gray-200 cursor-pointer"
    //   >
    //     <IoIosArrowRoundBack className="h-9 w-9" />
    //     <span className="text-md font-medium">Back</span>
    //   </Link>
    // </nav>
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <nav className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoHomeOutline className="h-7 w-7" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/languages"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HiOutlineCode className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">Languages</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/projects"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LuWallpaper className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/codeblocks"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BiCodeBlock className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Code Blocks
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/links"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiOutlineLink className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">Links</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/github"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AiFillGithub className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">GitHub</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/leetcode"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <TbBrandLeetcode className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">LeetCode</span>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoSettingsOutline className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoIosArrowRoundBack className="h-7 w-7" />
                <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default NavbarDashboard;
