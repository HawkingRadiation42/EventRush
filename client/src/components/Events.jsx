import React from "react";
import event from "../assets/Events.svg";
import "./Events.css";
import culture from "../assets/culture.svg";
import arrow from "../assets/arrow.svg";

const Events = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={event} alt="title" className="max-w-xs" />
      <div className="grid grid-cols-4">
        <div className="flex flex-col justify-center items-center  mt-5">
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
      </div>
    </div>
  );
};

export default Events;
