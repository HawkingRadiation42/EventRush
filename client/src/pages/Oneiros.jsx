import React from "react";
import Navbar from "../components/Navbar";
import footer from "../assets/footer.svg";
import OneirosComp from "../components/OneirosComp";


const Oneiros = () => {
  return (
    <div>
      <Navbar />      // navbar component
      <OneirosComp />   // oneiros comp
      <center>    // center
      <img src={footer} alt="footer" className="w-11/12 h-3/5" />    // image
      </center>
    </div>
  );
};

export default Oneiros;
