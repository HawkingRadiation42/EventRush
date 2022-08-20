import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import MyEvents from "./pages/MyEvents";
import Event from "./pages/Event";
import Oneiros from "./pages/Oneiros";

export const endpoint =
  "https://8000-hawkingradiation-jklu-ddrvtgsmf8i.ws-us62.gitpod.io/";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/cultural" element={<Coding />} />
        <Route path="/myevents" element={<MyEvents />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/Oneiros" element={<Oneiros />} />
      </Routes>
    </div>
  );
};

export default App;
