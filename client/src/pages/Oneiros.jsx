import React from "react";
import Navbar from "../components/Navbar";
import footer from "../assets/footer.svg";
import OneirosComp from "../components/OneirosComp";


const Oneiros = () => {
  return (
    <div>
      <Navbar />      
      <OneirosComp />
      <center>
      <img src={footer} alt="footer" className="w-11/12 h-3/5" />
      </center>
    </div>
  );
};

export default Oneiros;
