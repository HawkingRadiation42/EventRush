import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Events from "../components/Events";
import footer from "../assets/footer.svg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Events />
      <img src={footer} alt="footer" className="mt-8 h-3/5" />
    </div>
  );
};

export default Home;
