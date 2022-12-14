import React from "react";
import logo from "../logo.svg"

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900  md:mb-0" href="/">
            <img src={logo} alt="logo" className="max-h-10"/>
            <span className="ml-3 text-xl">Pandanews</span>
          </a>
          <nav className="md:ml-5 flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-blue-600" href="/">Home</a>
            <a className="mr-5 hover:text-blue-600" href="/">About</a>
          </nav>
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
