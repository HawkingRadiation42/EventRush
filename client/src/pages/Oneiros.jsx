import React from "react";
import Navbar from "../components/Navbar";
import footer from "../assets/footer.svg";
import OneirosComp from "../components/OneirosComp";

const Oneiros = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-stone-100">
        <OneirosComp />
      </div>
      <img src={footer} alt="footer" className=" h-3/5" />
    </div>
  );
};

export default Oneiros;
