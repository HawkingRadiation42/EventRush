import React from "react";
import Calender from "../components/Calender";
import Navbar from "../components/Navbar";
import eventsMap from "../assets/eventsMap.svg";
import univ from "../assets/University Events.svg";
import reg from "../assets/Registered Events.svg";
import { BsCircleFill } from "react-icons/bs";
import footer from "../assets/footer.svg";
const { AuthContext } = require("../AuthContext");

const MyEvents = () => {
  const { name, college_name } = React.useContext(AuthContext);
  const [name1, setName] = name;
  const [college_name1, setCollege_name] = college_name;
  return (
    <div className="bg-stone-100 min-h-screen">
      <Navbar />
      <div className="py-5 flex flex-col justify-center items-center w-5/6 mx-auto ">
        <img src={eventsMap} alt="eventsMap" className=" mt-24 mb-5" />
        <div className="flex justify-center items-center w-full bg-white mt-5 rounded-lg border border-gray-200 shadow-md">
          <div className="flex flex-col justify-center items-center w-full rounded-lg border border-gray-200 shadow-md p-5">
            <p className="font-semibold text-2xl">@{name1}</p>
            <p className="text-purple-800 text-4xl font-bold uppercase w-full text-center">
              {college_name1}
            </p>
            <Calender />
          </div>
          <div className="flex justify-between items-center flex-col w-full p-5">
            <img src={reg} alt="univ" className="w-3/5" />
            <div className="flex flex-col justify-center align-center w-full mt-5">
              <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
                <BsCircleFill color="green" size={15} />
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Oneiros</p>
                  <p>Manipal Univerity Jaipur</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Date</p>
                  <p>16 Oct 2022</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Event Type</p>
                  <p>Cultural Fest</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            <img src={univ} alt="univ" className="w-3/5 mt-5" />
            <div className="flex flex-col justify-center align-center w-full mt-5">
              <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
                <BsCircleFill color="orange" size={15} />
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Genesis</p>
                  <p>Manipal Univerity Jaipur</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Date</p>
                  <p>13 Sep 2022</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Event Type</p>
                  <p>Expert Talk</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
                  >
                    Register
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
                <BsCircleFill color="red" size={15} />
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">NCrypt by CSC MUJ</p>
                  <p>Manipal Univerity Jaipur</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Date</p>
                  <p>20 Aug 2022</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <p className="font-bold">Event Type</p>
                  <p>CTF</p>
                </div>
                <div className="flex flex-col justify-center align-center">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={footer} alt="footer" className="w-full mt-5" />
    </div>
  );
};

export default MyEvents;
