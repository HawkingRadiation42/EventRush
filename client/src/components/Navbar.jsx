import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";
const { AuthContext } = require("../AuthContext");

const Navbar = () => {
  const { name, email, college_name, college_email, image } =
    React.useContext(AuthContext);
  const [name1, setName] = name;
  const [email1, setEmail] = email;
  const [college_name1, setCollege_name] = college_name;
  const [college_email1, setCollege_email] = college_email;
  const [image1, setImage] = image;
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

  const handleLogoutClick = () => {
    setName("");
    setEmail("");
    setCollege_name("");
    setCollege_email("");
    setImage("");
  };

  if (name1 !== "") {
    return (
      <nav className="w-full flex justify-between items-center mb-5 text-black font-medium text-lg p-6 capitalize bg-white backdrop-blur-sm border-b-2 border-yellow-500 fixed z-20 font-Kodchasan">
        <div className="flex justify-start items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="w-48 " />
          </Link>
        </div>
        <div>
          <ul className="md:flex flex-1 justify-end items-center list-none hidden  ">
            {menuItems.map((item) => (
              <li className="my-2 mx-6 flex flex-col group" key={item.name}>
                <Link key={item.name} to={item.path} className="text-black">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* <FaUserAlt className="text-yellow-800 text-2xl" /> */}
        <div className="flex">
          <img
            src={image1}
            alt="dp"
            className="w-10 h-10 mr-5 border rounded-3xl"
          />
          <button
            type="button"
            className="focus:outline-none ml-5 text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            onClick={handleLogoutClick}
          >
            Log Out{" "}
          </button>
        </div>
      </nav>
    );
  }
  return (
    <nav className="w-full flex justify-between items-center mb-5 text-black font-medium text-lg p-6 capitalize bg-white backdrop-blur-sm border-b-2 border-yellow-500 fixed z-20 font-Kodchasan">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-48 " />
        </Link>
      </div>
      <div>
        <ul className="md:flex flex-1 justify-end items-center list-none hidden  ">
          {menuItems.map((item) => (
            <li className="my-2 mx-6 flex flex-col group" key={item.name}>
              <Link key={item.name} to={item.path} className="text-black">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <FaUserAlt className="text-yellow-800 text-2xl" /> */}
      {localStorage.getItem("Loggedin") ? (
        <div className="flex">
          {/* <img src={localStorage.getItem("dp")} alt="dp" className="w-10 h-10 mr-5" /> */}
          <button
            type="button"
            className="focus:outline-none ml-5 text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            onClick={localStorage.clear()}
          >
            Log Out{" "}
          </button>
        </div>
      ) : (
        <div className="flex">
          <Link to="/signin">
            <button
              type="button"
              className="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Log In
            </button>{" "}
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Register
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
