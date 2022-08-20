import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Profile from "./pages/Profile";
import Event from "./pages/Event";
import Oneiros from "./pages/Oneiros";

export const endpoint = "http://127.0.0.1:8000";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/cultural" element={<Coding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/Oneiros" element={<Oneiros />} />
      </Routes>
    </div>
  );
};

export default App;
