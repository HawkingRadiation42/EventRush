import React, { useState } from "react";
import "./SignIn.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a3b18c3 (css added (started))
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [imageurl, setImageurl] = useState(null);
  const [loading, setLoading] = useState(false);
  const storage = getStorage(app);
  const { enqueueSnackbar } = useSnackbar();

<<<<<<< HEAD
=======
>>>>>>> df66ad7 (login layout started)
=======
>>>>>>> a3b18c3 (css added (started))

const SignIn = () => {
  return (
    <div className="back flex justify-center items-center">
<<<<<<< HEAD
    <div className="flex justify-center items-center bg-white">
      <div className="mt-6 w-1/2 h-full flex justify-center flex-col items-center">

        <h1 className="mb-6">Event Rush</h1>
        <h2>Sign in to your Account</h2>
        <form className="flex flex-col justify-center items-center h-96 w-96">
          <div className="text-left justify-start">
        <label
              for="email"
              className="block mb-2 text-sm text-left font-medium text-gray-900 "
            >
              Email address
            </label>
            </div>
          <div className="flex items-center border rounded-lg focus:border-blue-500">
          <MdAlternateEmail size={20} className="text-gray-600" />
            <input
              type="email"
              id="email"
              className="text-gray-900 text-sm rounded-lg focus:outline-none  block w-52 p-2.5"
              placeholder="john.doe@company.com"
              required=""
            />
          </div>
          <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>

          
          <div className="text-gray-900 text-sm rounded-lg focus:outline-none w-56 p-2.5 flex items-center border focus:border-blue-500">


          <RiLockPasswordFill size={20} className="text-gray-600" />
            
            <input
              type="password"
              id="password"
              className="text-gray-900 text-sm rounded-lg focus:outline-none block w-60"
              placeholder="•••••••••"
              required=""
            />
          </div>
          <div className="mb-6">
            
          </div>
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
=======
      <div className="flex justify-center items-center bg-white">Hello
      
>>>>>>> df66ad7 (login layout started)
      </div>
    </div>
  </div>
  );
};

export default SignIn;
