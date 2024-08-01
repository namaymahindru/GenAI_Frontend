import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <Link to="/" className="mb-4 sm:mb-0">
          <h1 className="font-bold text-xl text-blue-400 hover:text-blue-300 transition duration-300">
            Import Genius
          </h1>
        </Link>

        {/* <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6"> */}
          <Link
            to="/"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/ImportGuidance"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            Import Guidance
          </Link>
          <Link
            to="/About"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Sign In
          </Link>
        {/* </nav> */}
      </div>
    </header>
  );
}
