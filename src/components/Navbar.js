import React, { useState } from "react";

import { Link } from "react-router-dom";


const Navbar = ({ onSignUpClick, cartItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 flex justify-between items-center px-20 py-4 bg-gray-900 shadow-lg z-50">
      {/* Logo Section */}
      <div className="flex items-center text-white ">
        <img
          src={"/images/logo.png"} // Use the imported logo image
          alt="Company Logo"
          className="h-14 w-14 mr-2" // Tailwind classes for size and spacing
        />
        <span className="text-2xl font-bold pr-10">Estate </span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-20">
        <Link to="/" className="hover:text-blue-500 text-lg font-bold text-white pl-20 ">
          Home
        </Link>
        <Link to="/about-us" className="hover:text-blue-500 text-lg font-bold text-white">
          About
        </Link>
        <Link to="/Projects" className="hover:text-blue-500 text-lg font-bold text-white">
          Projects
        </Link>
        <Link to="/Testimonials" className="hover:text-blue-500 text-lg font-bold text-white">
          Testimonials
        </Link>
        <Link to="/ContactUs" className="hover:text-blue-500 text-lg font-bold text-white" >
          Contact Us
        </Link>
      </nav>

      {/* Sign Up Button moved to the right */}
      <button
        onClick={onSignUpClick}
        className="bg-slate-700 text-white py-2 px-6  rounded-md hover:bg-slate-950 ml-auto mr-5"
      >
        Sign Up
      </button>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="/" className="hover:text-blue-500 text-lg font-bold">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-blue-500 text-lg font-bold">
            About
          </Link>
          <Link to="/Projects" className="hover:text-blue-500 text-lg font-bold">
            Projects
          </Link>
          <Link to="/Testimonials" className="hover:text-blue-500 text-lg font-bold">
            Testimonials
          </Link>
          <Link to="/ContactUs" className="hover:text-blue-500 text-lg font-bold">
            Contact Us
          </Link>
          <button
            onClick={onSignUpClick}
            className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white"
          >
            Sign up
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
