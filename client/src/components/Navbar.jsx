import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "My Events",
      path: "/myevents",
    },
    {
      name: "Create Event",
      path: "/createevent",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <nav className="w-full flex justify-between items-center text-black font-medium text-lg p-6 capitalize bg-white backdrop-blur-sm border-b-2 border-yellow-500 fixed z-20 font-Kodchasan">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-48 " />
        </Link>
      </div>
      <div>
        <ul className="md:flex flex-1 justify-end items-center list-none hidden  ">
          {menuItems.map((item) => (
            <li className="my-2 mx-6 flex flex-col group" key={`home`}>
              <Link key={item.name} to={item.path} className="text-black">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        {/* <FaUserAlt className="text-yellow-800 text-2xl" /> */}
        <Link to="/signin">
          <button
            type="button"
            class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
          >
            Log In
          </button>{" "}
        </Link>
        <Link to="/signup">
          <button
            type="button"
            class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
          >
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;