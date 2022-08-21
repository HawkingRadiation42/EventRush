import upload from "../assets/UploadPhoto.svg";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserAlt, FaUniversity } from "react-icons/fa";
import { BsGenderAmbiguous } from "react-icons/bs";
import { GiDiploma } from "react-icons/gi";
import logo from "../assets/EVENTrush.svg";
import "./SignUpPage.css";

const SignUpForm = ({
  handleTextChange,
  handleUploadClick,
  handleUploadImageClick,
  handleSubmit,
}) => (
  <div className="flex justify-center items-center bg-white w-8/12 mt-20 pt-20">
    <div className="w-1/2 flex justify-center flex-col items-center">
      <img className="mb-6 mt-16" src={logo} alt="EventRushLogo" />
      <h2 className="font text-2xl font-semibold mb-9">
        Sign up for CampusRush
      </h2>
      <form className="flex justify-between flex-col ml-11">
        <div className="mb-2">
          <label
            for="email"
            className="block text-sm font-bold text-indigo-900 "
          >
            Your Email
          </label>
          <div className="flex items-center border rounded-lg focus:border-orange-500">
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
        <div className="mb-2">
          <label
            for="password"
            className="block mb-2 text-sm font-bold text-indigo-900 "
          >
            Password
          </label>
          <div className="flex items-center border rounded-lg focus:border-orange-500">
            <RiLockPasswordFill className="text-gray-600" />
            <input
              type="password"
              id="password"
              name="password"
              className=" text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
              placeholder="Password"
              required=""
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label
            for="password"
            className="block mb-2 text-sm font-bold text-indigo-900 "
          >
            Name
          </label>
          <div className="flex items-center border focus:border-orange-500 rounded-lg">
            <FaUserAlt className="text-gray-600" />
            <input
              type="text"
              id="name"
              className=" text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
              required=""
              name="name"
              placeholder="Name"
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label
            for="password"
            className="block mb-2 text-sm font-bold text-indigo-900 "
          >
            Mobile Number
          </label>
          <div className="flex items-center border focus:border-orange-500 rounded-lg">
            <FaUserAlt className="text-gray-600" />
            <input
              type="string"
              id="mobile"
              className=" text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
              required=""
              name="mobile"
              placeholder="+91"
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-2 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-bold text-indigo-900"
            >
              Age
            </label>

            <input
              type="text"
              id="first_name"
              className=" border text-indigo-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
              placeholder="Enter Age Here"
              required=""
              name="age"
              onChange={handleTextChange}
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-bold text-indigo-900 "
            >
              Gender
            </label>
            <div className="flex items-center border focus:border-orange-500 rounded-lg">
              <BsGenderAmbiguous className="text-gray-600" />
              <input
                type="text"
                id="gender"
                className=" text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
                placeholder="Doe"
                required=""
                name="gender"
                onChange={handleTextChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <label
            for="confirm_password"
            className="block mb-2 text-sm font-bold text-indigo-900 "
          >
            College/University Name
          </label>
          <div className="flex items-center border rounded-lg focus:border-orange-500">
            <FaUniversity className="text-gray-600" />
            <input
              type="text"
              id="college"
              className=" text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
              placeholder="eg. Manipal University Jaipur"
              required=""
              name="college"
              onChange={handleTextChange}
            />
          </div>
        </div>
        <div className="mb-2">
          <label
            for="email"
            className="block text-sm font-bold text-indigo-900 "
          >
            College Email Id
          </label>
        </div>
        <div className="flex items-center border rounded-lg focus:border-orange-500">
          <GiDiploma className="text-gray-600" />
          <input
            type="email"
            id="collegeEmail"
            className=" text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:outline-none block w-full p-2.5 "
            placeholder="eg. vansh.48873857@muj.manipal.edu"
            required=""
            name="collegeEmail"
            onChange={handleTextChange}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-orange-300 "
              required=""
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-400 "
          >
            I agree with the{" "}
            <button className="text-orange-400 hover:underline dark:text-orange-500">
              terms and conditions
            </button>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 mb-16 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          onClick={handleSubmit}
        >
          SIGN UP
        </button>
      </form>
    </div>
    <div>
      <hr />
    </div>
    <div className="flex flex-col">
      <img
        src={upload}
        alt="img"
        className="mkptr w-10/12 ml-10"
        onClick={handleUploadImageClick}
      />
      <input
        type="file"
        className="hidden"
        accept="image/*"
        id="upload"
        onChange={handleUploadClick}
      ></input>
      <p className="text-center" id="uploadtext">
        Upload your Profile Picture Above
      </p>
    </div>
  </div>
);

export default SignUpForm;
