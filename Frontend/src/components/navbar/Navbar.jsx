import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        
        {/* Left: Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Blog Manager
          </span>
        </Link>

        {/* Center: Search Bar */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-1/3">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right: Navbar Links (HOME, ABOUT, SERVICES) */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-900 hover:text-blue-700 dark:text-white"
          >
            Home
          </Link>
          <Link
            to="/blog/add"
            className="text-gray-900 hover:text-blue-700 dark:text-white "
          >
            Create Blog
          </Link>
          <Link
            to="/register"
            className="text-gray-900 hover:text-blue-700 dark:text-white "
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-gray-900 hover:text-blue-700 dark:text-white "
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
