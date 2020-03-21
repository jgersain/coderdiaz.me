import * as React from "react";
import { Link } from "gatsby";
import Logotype from "../components/Logotype";

const Header = () => {
  return (
    <header className="bg-darken pt-10 pb-5">
      <div className="container px-4 sm:px-8 md:px-8 lg:max-w-screen-lg mx-auto relative">
        <nav className="flex md:justify-center">
          <Link to="/">
            <Logotype width={180} className="fill-current text-gray-500" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
