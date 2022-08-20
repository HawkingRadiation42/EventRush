import React from "react";
import ctitle from "../assets/culturalHeader.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import filter from "../assets/filter.svg";

const CodingHeader = () => {
  return (
    <div className="flex flex-col justify-center align-center">
      <div className="flex justify-between ">
        <div>
          <img src={left} alt="title" className="" />
        </div>
        <div className="flex flex-col">
          <img src={ctitle} alt="title" className="max-w-screen-xs mt-40" />
          <img src={filter} alt="title" className="mt-5" />
        </div>
        <div>
          <img src={right} alt="title" className="" />
        </div>
      </div>
    </div>
  );
};

export default CodingHeader;
