import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto shadow-md">
      <nav className="grid grid-cols-3">
        <div>
          <Link to="/">
            <img className="w-16" src={logo} alt="" />
          </Link>
        </div>
        <ul
          className={`md:bg-none flex flex-col justify-center md:flex-row md:justify-center bg-sky-300 md:bg-inherit absolute md:static p-4 md:p-6 duration-500 ease-in ${
            open ? "left-0" : "left-[-150px]"
          }`}
        >
          <li className="mr-5">
            <Link
              to="/"
              className="group text-gray-900 transition duration-300"
            >
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-600"></span>
            </Link>
          </li>
          <li className="mr-5">
            <Link
              to="/about"
              className="group text-gray-900 transition duration-300"
            >
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-600"></span>
            </Link>
          </li>
          <li className="mr-5">
            <Link
              to="/product"
              className="group text-gray-900 transition duration-300"
            >
              Product
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-600"></span>
            </Link>
          </li>
          <li className="mr-5">
            <Link
              to="/blog"
              className="group text-gray-900 transition duration-300"
            >
              Blog
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-600"></span>
            </Link>
          </li>
          <li className="mr-5 visible md:invisible">
            <Link
              to="/contact"
              className="group text-gray-900 transition duration-300"
            >
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-pink-600"></span>
            </Link>
          </li>
        </ul>
        <div>
          <div className="invisible md:visible flex justify-center items-center ">
            <Link to="/contact" className="mr-5 text-white">
              <button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-sky-500 rounded text-base mt-6">
                Contact
              </button>
            </Link>
          </div>
          <div className="md:hidden absolute top-4 right-4 cursor-pointer">
            {open ? (
              <RxCross1 onClick={() => setOpen(!open)} />
            ) : (
              <RxHamburgerMenu onClick={() => setOpen(!open)} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
