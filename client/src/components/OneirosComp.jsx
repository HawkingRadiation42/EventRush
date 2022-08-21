import React from "react";
import "./OneirosComp.css";
import rectangle from "../assets/Rectangle.svg";
import sponsor1 from "../assets/Oneiros-Sponsors/image 1.svg";
import sponsor2 from "../assets/Oneiros-Sponsors/image 2.svg";
import sponsor3 from "../assets/Oneiros-Sponsors/image 3.svg";
import sponsor4 from "../assets/Oneiros-Sponsors/image 4.svg";
import sponsor5 from "../assets/Oneiros-Sponsors/image 5.svg";
import sponsor6 from "../assets/Oneiros-Sponsors/image 6.svg";
import poster from "../assets/Hack JKLU White Poster.svg";
import OneirosLogo from "../assets/ONEIROS.svg";
import axios from "axios";
import { endpoint } from "../App";
import { useSnackbar } from "notistack";
import QRCode from "react-qr-code";
const { AuthContext } = require("../AuthContext");

const OneirosComp = () => {
  const {
    name,
    email,
    college_name,
    college_email,
    event_name,
    event_date,
    event_type,
    event_time,
    register,
  } = React.useContext(AuthContext);
  const [name1, setName] = name;
  const [email1, setEmail] = email;
  const [college_name1, setCollege_name] = college_name;
  const [college_email1, setCollege_email] = college_email;
  const [event_name1, setEvent_name] = event_name;
  const [event_date1, setEvent_date] = event_date;
  const [event_type1, setEvent_type] = event_type;
  const [event_time1, setEvent_time] = event_time;
  const [register1, setRegister] = register;

  const { enqueueSnackbar } = useSnackbar();

  const data = {
    name: name1,
    email: email1,
    college_name: college_name1,
    c_email: college_email1,
    event_name: event_name1,
    event_date: event_date1,
    event_type: event_type1,
    event_time: event_time1,
  };

  const names = name1;

  const handleRegister = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post(`${endpoint}/registration`, data);
    // if (res.status === 200) {
    enqueueSnackbar("Registered successfully", { variant: "success" });
    setRegister(true);
    //   }
    // } catch (error) {
    //   enqueueSnackbar("Something went wrong", { variant: "error" });
    // }
  };

  const handleUnregister = async (e) => {
    setRegister(false);
  };

  return (
    <div className="bg-gray-200">
      <div className="backDrop flex p-10 ppp">
        <img
          src={poster}
          alt="poster1"
          className="w-[15em] mt-[4em] h-[18em]"
        />

        <div className="rounded-lg mt-20 h-64 p-2 bg-black w-3/12 bg-opacity-40">
          <img
            className="w-1/2 ml-[4.5em] mt-4 mb-4"
            src={OneirosLogo}
            alt="EventRushLogo"
          />
          <p className="text-white font-thin pl-8">
            Hosted by:{" "}
            <span className="font-semibold text-white">
              Student Council MUJ
            </span>
          </p>
          <p className="text-white font-thin pl-8">
            Venue:{" "}
            <span className="font-semibold text-white">
              Manipal University Jaipur
            </span>
          </p>
          <p className="text-white font-thin pl-8">
            Date:{" "}
            <span className="font-semibold text-white">16-18 OCT 2022</span>
          </p>
          <p className="text-white font-thin pl-8">
            Time: <span className="font-semibold text-white">0900 hrs</span>
          </p>
          <p className="text-white font-thin pl-8 mb-2">
            Event Fee: <span className="font-semibold text-white">Free</span>
          </p>

          {register1 ? (
            <>
              <button
                type="button"
                className="w-8/12 p-1.5 ml-[3em] text-white bg-green-400 rounded bg-opacity-40"
                onClick={handleUnregister}
              >
                Unregister
              </button>
              <center>
                <p className="text-white text-xs">
                  <span className="font-bold text-orange-400">0</span> seat left
                </p>
              </center>
            </>
          ) : (
            <>
              <button
                type="button"
                className="w-8/12 p-1.5 ml-[3em] text-white bg-orange-400 rounded bg-opacity-40"
                onClick={handleRegister}
              >
                Register{" "}
              </button>
              <center>
                <p className="text-white text-xs">
                  Hurry only{" "}
                  <span className="font-bold text-orange-400">1</span> seat left
                </p>
              </center>
            </>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg h-max w-11/12 m-10 mb-12 p-12 block">
        <h1 className="font-bold text-3xl">Overview</h1>
        <p className="mt-6">
          Oneiros is the annual cultural fest of Manipal University Jaipur.{" "}
          <br></br>
          It is a 3 day long event which includes a DJ night on Day-1, stand-up
          comedy on Day-2 and live <br /> concert of renowned musicians on Day-3
          the final day.
        </p>
        <h1 className="font-bold text-3xl mt-6 mb-6">Rules and Regulations</h1>

        <p>
          {" "}
          <ul className="list-disc pl-8">
            <li> Proper dress code is compulsory. </li>
            <li> No allowance to anyone who comes as an alcoholic. </li>
            <li> Only the people with passes are allowed </li>
            <li>
              {" "}
              No one is allowed to bring any undue substances to the fest.{" "}
            </li>
            <li>
              {" "}
              Aggressive behavious will not be tolerated. Anyone found doing so
              will be kicked out.{" "}
            </li>
            <li> No one will be allowed in before the given time. </li>
            <li>
              {" "}
              University students should carry their student ID with them.{" "}
            </li>
          </ul>
        </p>

        <h1 className="font-bold text-3xl mt-6 mb-6">Events</h1>

        <div className="flex align-middle">
          <img src={rectangle} alt="title" className="max-w-xs" />
          <h2 className="ml-11 font-semibold text-2xl pt-2"> Day 1</h2>
        </div>
        <p>
          {" "}
          <ul className="list-disc pl-12 mt-6 mb-6">
            <li>
              {" "}
              The DJ night will be from 7:00p.m-11:00pm. On 16th October 2022.{" "}
            </li>
            <li>Nuclea will be the invited DJ. </li>
            <li>At the end everyone will get the Day-2 passes at the exit. </li>
          </ul>
        </p>

        <div className="flex align-middle">
          <img src={rectangle} alt="title" className="max-w-xs" />
          <h2 className="ml-11 font-semibold text-2xl pt-2"> Day 2</h2>
        </div>

        <p>
          <ul className="list-disc pl-12 mt-6 mb-6">
            <li>
              {" "}
              The Stand-up Comedy night will be from 8:00p.m-10:00p.m. On 17th
              October 2022.
            </li>
            <li>
              Anhubhav Singh Bassi will be the invited Stand-Up Comadian.{" "}
            </li>
            <li>At the end everyone will get the Day-2 passes at the exit. </li>
          </ul>
        </p>

        <div className="flex align-middle">
          <img src={rectangle} alt="title" className="max-w-xs" />
          <h2 className="ml-11 font-semibold text-2xl pt-2"> Day 3</h2>
        </div>

        <p>
          <ul className="list-disc pl-12 mt-6 mb-6">
            <li>
              {" "}
              The final Day will be the Live Concrt and will be from
              9:00p.m-11:00p.m. On 18th October2022.{" "}
            </li>
            <li>Diljit Dosanjh will be the invited Artist for Live Concert.</li>
            <li>We hope you enjoyed the Event. </li>
          </ul>
        </p>

        <h1 className="font-bold text-3xl mt-6 mb-6">Our Partners</h1>

        <div className="flex">
          <img src={sponsor1} alt="title" className="w-2/12 h-2/12 p-2" />
          <img src={sponsor2} alt="title" className="w-2/12 h-2/12 p-2" />
          <img src={sponsor3} alt="title" className="w-2/12 h-2/12 p-2" />
          <img src={sponsor4} alt="title" className="w-2/12 h-2/12 p-2" />
          <img src={sponsor5} alt="title" className="w-2/12 h-2/12 p-2" />
          <img src={sponsor6} alt="title" className="w-2/12 h-2/12 p-2" />
        </div>
        <div className="flex justify-center flex-col items-center mt-5">
          <h1 className="text-3xl font-bold">Your Registration</h1>
          {register1 ? (
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "10rem", width: "10rem" }}
              value="You are registered for Oneiros"
              viewBox={`0 0 256 256`}
            />
          ) : (
            <h1 className="font-bold">No Registration Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneirosComp;
