import Link from "next/link";

const NavbarDashboard = () => {
  return (
    <nav className="bg-blue-500 p-4 h-screen w-1/4 fixed top-0 left-0">
      <div className="container mx-auto">
        <Link
          href="/dashboard"
          className="block text-white text-2xl font-semibold mb-4 hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block text-white text-lg mb-4 hover:text-gray-300"
        >
          Contact
        </Link>
        <Link
          href="/signin"
          className="block text-white text-lg hover:text-gray-300"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
