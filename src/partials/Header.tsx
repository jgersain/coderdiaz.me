import * as React from "react";
import { Link } from "gatsby";
import Logotype from "../components/Logotype";

const Header = () => {
  return (
    <header className="bg-darken pt-10 pb-5">
      <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
        <nav className="flex md:justify-between">
          <Link to="/">
            <Logotype width={180} className="fill-current text-gray-500" />
          </Link>
          <div className="ml-5 md:mr-0 md:ml-6 md:flex md:items-center">
            <Link to="/" className="px-3 py-2 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Home</Link>
            <Link to="/about" className="ml-1 px-3 py-2 rounded-md text-base font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">About</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
