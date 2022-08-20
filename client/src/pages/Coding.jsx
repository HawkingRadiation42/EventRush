import React from "react";
import Navbar from "../components/Navbar";
import CodingHeader from "../components/CodingHeader";
import EventsTable from "../components/EventsTable";
import footer from "../assets/footer.svg";

const Coding = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-stone-100">
        <CodingHeader />
        <EventsTable />
      </div>
      <img src={footer} alt="footer" className=" h-3/5" />
    </div>
  );
};

export default Coding;
