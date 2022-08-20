import React from "react";
import { Link } from "react-router-dom"

const EventsTable = () => {
  return (
    <div className="flex flex-col w-3/5 mx-auto min-h-screen">
      <p className="font-bold">03 Events Found</p>
      <div className="flex flex-col justify-center align-center mt-5">
        <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Oneiros</p>
            <p>Manipal Univerity Jaipur</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Date</p>
            <p>16 Oct 2022</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Event Type</p>
            <p>Cultural Fest</p>
          </div>
          <div className="flex flex-col justify-center align-center">
          <Link to="/event/oneiros">
            <button
              type="button"
              class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Register
            </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Rendezvous</p>
            <p>IIT Delhi</p>
          </div>
          <div className="flex flex-col justify-center align-center ml-24">
            <p className="font-bold">Date</p>
            <p>24 Oct 2022</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Event Type</p>
            <p>Cultural Fest</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <button
              type="button"
              class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Register
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Genesis</p>
            <p>Manipal Univerity Jaipur</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Date</p>
            <p>24 Dec 2022</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Event Type</p>
            <p>Party Night</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <button
              type="button"
              class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Register
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center bg-white p-5 border rounded-lg">
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">NCrypted</p>
            <p>Manipal Univerity Jaipur</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Date</p>
            <p>30 Aug 2022</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <p className="font-bold">Event Type</p>
            <p>Music Night</p>
          </div>
          <div className="flex flex-col justify-center align-center">
            <button
              type="button"
              class="focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 "
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsTable;
