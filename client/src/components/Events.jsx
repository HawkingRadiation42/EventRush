import React from "react";
import event from "../assets/Events.svg";
import "./Events.css";
import culture from "../assets/culture.svg";
import coding from "../assets/coding.svg";
import sport from "../assets/sport.jpg";
import expert from "../assets/expert.svg";
import arrow from "../assets/arrow.svg";
import digital from "../assets/digital.svg";
import tech from "../assets/tech.jpg";
import esport from "../assets/esport.svg";
import debate from "../assets/debate.svg";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <img src={event} alt="title" className="max-w-xs" />
      <div className="grid grid-cols-4 gap-10 mt-5 h-full">
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={culture}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-black w-full rounded-b-lg">
            <h1>
              Cultural <br></br> Events
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
        <Link to="/coding">
          <div className="flex flex-col justify-center items-center h-full mt-5">
            <img
              src={coding}
              alt="title"
              className="max-w-xs rounded-t-lg w-full"
            />
            <div className="flex justify-between items-center text-white text-3xl p-5 bg-fuchsia-900 w-full rounded-b-lg">
              <h1>
                Coding <br></br> Events
              </h1>
              <img src={arrow} alt="title" className="w-8" />
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={sport}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-sky-900 w-full rounded-b-lg">
            <h1>
              Sports <br></br> Events
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={expert}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-neutral-700 w-full rounded-b-lg">
            <h1>
              Expert <br></br> Talks
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={esport}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-red-900 w-full rounded-b-lg">
            <h1>
              E-Sport <br></br> Events
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={debate}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-amber-700 w-full rounded-b-lg">
            <h1>
              Debating <br></br> Talks
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={digital}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-stone-400 w-full rounded-b-lg">
            <h1>
              Digital Arts <br></br> Events
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-full mt-5">
          <img
            src={tech}
            alt="title"
            className="max-w-xs rounded-t-lg w-full"
          />
          <div className="flex justify-between items-center text-white text-3xl p-5 bg-green-800 w-full rounded-b-lg">
            <h1>
              Tech <br></br> Events
            </h1>
            <img src={arrow} alt="title" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;