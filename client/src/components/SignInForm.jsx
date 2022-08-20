import logo from "../assets/EVENTrush.svg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom"

const SignInForm = ({ handleTextChange, handleSubmit }) => (
  <div className="flex justify-center items-center bg-white w-5/12 h-full rounded">
    <div className="w-11/12 h-full flex justify-center flex-col items-center mt-6">
      <img className="mb-6 mt-20" src={logo} alt="EventRushLogo" />
      <h2 className="font text-2xl font-semibold">Sign In for CampusRush</h2>
      <form className="h-max mt-6 mb-6">
        <div className="mb-6">
          <label for="email" className="block text-sm font-bold text-gray-900 ">
            Your Email
          </label>
          <div className="flex items-center border rounded-lg focus:border-blue-500">
            <MdAlternateEmail className="text-gray-600" />
            <input
              type="email"
              id="email"
              name="email"
              className="  text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 "
              placeholder="Email address"
              required=""
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-bold text-gray-900 "
          >
            Password
          </label>
          <div className="flex items-center border rounded-lg focus:border-blue-500">
            <RiLockPasswordFill className="text-gray-600" />
            <input
              type="password"
              id="password"
              name="password"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5 "
              placeholder="Password"
              required=""
              onChange={handleTextChange}
            />
          </div>
        </div>

        <div className="flex items-start mb-6">
          <div className="flex flex-row items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-orange-400 "
              required=""
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-900 "
          >
            Remember me
          </label>
          <a href="#" className="text-sm font-semibold ml-9 text-orange-400">
            {" "}
            Forgot Password?{" "}
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" w-full h-12 px-6 text-white transition-colors duration-150 bg-orange-400 rounded-md focus:shadow-outline hover:bg-orange-500"
            onClick={handleSubmit}
          >
            SIGN IN
          </button>
        </div>
        <h2 className="font mb-20">
          Don't have an account yet?{" "}
          <Link to="/signup">
            <span className="text-orange-400 font-bold"> Sign Up </span>
          </Link>
        </h2>
      </form>
    </div>
    <div>
      <hr />
    </div>
  </div>
);

export default SignInForm;
