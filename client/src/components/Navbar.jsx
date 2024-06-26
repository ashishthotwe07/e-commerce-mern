import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaSearch, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import Footer from "./Footer";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSearchOpen(false);
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div class="flex items-center justify-center">
              <div class="text-xl font-bold text-blue-700">SHOP</div>
              <div class="text-xl font-bold flex ml-1 items-center text-green-700">
                ONLINE
              </div>
            </div>
          </a>
          <div className="flex md:order-1">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={` md:hidden text-gray-500 dark:text-gray-400  dark:hover:bg-gray-700  rounded-lg text-sm p-2.5 me-1`}
            >
              <FaSearch className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </button>
            <div className="relative w-60 hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className={`${
                  mobileMenuOpen ? "hidden" : ""
                } block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="search product here..."
              />
            </div>
            <ul className="flex md:hidden p-4  font-medium rounded-lg  rtl:space-x-reverse ">
              <li className="">
                <a
                  href="signin"
                  className="block py-2 px-3 text-gray-500 rounded  dark:text-white dark:border-gray-700"
                >
                  <FaUserCircle className=" inline-block mr-2 w-6 h-6" />
                </a>
              </li>
              <li className="relative">
                <a
                  href="cart"
                  className="block py-2 px-3 text-gray-500 rounded  dark:text-white  dark:border-gray-700"
                >
                  <FaShoppingCart className="inline-block mr-2 w-6 h-6" />
                </a>

                <span className="absolute bg-red-500 w-6 h-6 -top-2 -left-0 flex rounded-xl justify-center">
                  4
                </span>
              </li>
              <li className="flex md:hidden">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center justify-center w-7 mt-2 h-7 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 focus:outline-none"
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5" />
                  ) : (
                    <FaMoon className="w-5 h-5" />
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`${
              mobileSearchOpen || mobileMenuOpen ? "" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <FaSearch />
              </div>
              <input
                type="text"
                id="search-navbar"
                className={`${
                  mobileMenuOpen ? "" : "hidden"
                } block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="search product..."
              />
            </div>
            <ul className="hidden md:flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="">
                <a
                  href="signin"
                  className="block py-2 px-3 text-gray-500 rounded  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaUserCircle className=" inline-block mr-2 w-6 h-6" />
                </a>
              </li>
              <li className="relative">
                <a
                  href="cart"
                  className="block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaShoppingCart className="inline-block mr-2 w-6 h-6" />
                </a>

                <span className="absolute bg-red-500 w-6 h-6 -top-3 -left-2 flex rounded-xl justify-center">
                  4
                </span>
              </li>
              <li className="hidden md:flex">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 focus:outline-none"
                >
                  {isDarkMode ? (
                    <FaSun className="w-5 h-5" />
                  ) : (
                    <FaMoon className="w-5 h-5" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
