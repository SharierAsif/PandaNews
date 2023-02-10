import React, { useEffect, useState } from "react";
import logo from "../logo.svg"
import {Link} from "react-router-dom";
import Darkmode from "./Darkmode";
import { HiOutlineBars3,HiOutlineXMark } from "react-icons/hi2";


function Navbar() {
  var [isMenuOpen, setIsMenuOpen] = useState(true)
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = (event) => {
  //   setScrollTop(event.currentTarget.scrollTop);
  // };


  let handleMenu = () => {
    console.log("clicked me")

    setIsMenuOpen(!isMenuOpen)
    document.getElementById("menu").classList.add("flex")
   
  }
  const close = () => {
    document.getElementById("menu").classList.add("hidden")
  }
  useEffect(() => {

    !isMenuOpen?document.getElementById("menu").classList.remove("hidden"):document.getElementById("menu").classList.add("hidden")
  })
  return (
    <>
      <div className="dark:bg-slate-900">
      <header className="text-gray-600 body-font">
        <div className="container relative justify-between flex flex-col mx-auto sm:flex-row flex-wrap p-3 sm:items-center">
          <a className="flex title-font font-medium items-center text-gray-900  md:mb-0" href="/">
            <img src={logo} alt="logo" className="max-h-10 dark:invert"/>
            <span className="ml-3 text-xl dark:text-gray-600 font-medium">Pandanews</span>
          </a>
          <nav id="menu" className="md:ml-5 hidden sm:flex flex-col sm:flex-row sm:items-center sm:text-base sm:justify-center">
            <Link className="mr-5 hover:text-blue-600" to="/">Home</Link>
            <Link className="mr-5 hover:text-blue-600" to="/business">Business</Link>
            <Link className="mr-5 hover:text-blue-600" to="/entertainment">Entertainment</Link>
            <Link className="mr-5 hover:text-blue-600" to="/">General</Link>
            <Link className="mr-5 hover:text-blue-600" to="/health">Health</Link>
            <Link className="mr-5 hover:text-blue-600" to="/technology">Technology</Link>
            <Link className="mr-5 hover:text-blue-600" to="/sports">Sports</Link>
          </nav>
            <button id="bar" className="text-3xl opacity-100 absolute top-5 right-5" onClick={handleMenu}>
               {isMenuOpen?<HiOutlineBars3/>:<HiOutlineXMark/>}
          </button>
          <Darkmode/>
        </div>
      </header>
    </div>
    </>
    
    
  );
}

export default Navbar;
