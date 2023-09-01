import Link from "next/link";

const NavbarDashboard = () => {
  return (
    <nav className="bg-blue-500 p-4 h-screen w-0.5/4 fixed top-0 left-0 flex flex-col">
      <div className="container mx-auto">
        <Link
          href="/"
          className="block text-white text-2xl font-semibold mb-4 hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          href="/github"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          Github
        </Link>
        <Link
          href="/leetcode"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          Leetcode
        </Link>
        <Link
          href="/languages"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          My Languages
        </Link>
        <Link
          href="/projects"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          My Projects
        </Link>
        <Link
          href="/code"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          My Code Snippets
        </Link>
        <Link
          href="/links"
          className="block text-white text-lg hover:text-gray-300"
        >
          My Developer Links
        </Link>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
