import React from "react";
import "./SignUp.css";
import upload from "../assets/UploadPhoto.svg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";

const SignUp = () => {
  return (
    <div className="back flex justify-center items-center">
      <div className="flex justify-center items-center bg-white">
        <div className="w-1/2 h-full flex justify-center flex-col items-center">
          <h1>Event Rush</h1>
          <h2>Sign up for CampusRush</h2>
          <form>
            <div className="mb-6">
              <label
                for="email"
                className="block text-sm font-medium text-gray-900 "
              >
                Your Email
              </label>
              <div className="flex items-center border rounded-lg focus:border-blue-500">
                <MdAlternateEmail className="text-gray-600" />
                <input
                  type="email"
                  id="email"
                  className="  text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 "
                  placeholder="john.doe@company.com"
                  required=""
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg focus:border-blue-500">
                <RiLockPasswordFill className="text-gray-600" />
                <input
                  type="password"
                  id="password"
                  className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 "
                  placeholder="•••••••••"
                  required=""
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <div className="flex items-center border focus:border-blue-500 rounded-lg">
                <FaUserAlt className="text-gray-600" />
                <input
                  type="text"
                  id="name"
                  className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 "
                  required=""
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Age
                </label>

                <input
                  type="text"
                  id="first_name"
                  className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="John"
                  required=""
                />
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Gender
                </label>
                <div className="flex items-center border focus:border-blue-500 rounded-lg">
                  <BsGenderAmbiguous className="text-gray-600" />
                  <input
                    type="text"
                    id="last_name"
                    className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 "
                    placeholder="Doe"
                    required=""
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                for="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                College/University Name
              </label>
              <input
                type="text"
                id="college"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
                required=""
              />
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-medium text-gray-900 "
              >
                College Email Id
              </label>
            </div>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required=""
            />
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 "
                  required=""
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <hr />
        </div>
        <div className="flex flex-col">
          <img src={upload} alt="img" />
          <p className="text-center">Upload your Profile Picture Above</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
