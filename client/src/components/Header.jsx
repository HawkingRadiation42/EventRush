import React from "react";
import title from "../assets/headertitle.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const Header = () => {
  return (
    <div className="flex flex-col justify-center align-center">
      <div className="flex justify-between ">
        <div>
          <img src={left} alt="title" className="" />
        </div>
        <div className="flex flex-col">
          <img src={title} alt="title" className=" mt-40" />
          <p className="text-center mt-5 text-mute">
            ~No more waiting in looong lines! Register here~
          </p>
        </div>
        <div>
          <img src={right} alt="title" className="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
