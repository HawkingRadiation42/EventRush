import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import MyEvents from "./pages/MyEvents";
import Event from "./pages/Event";
import Oneiros from "./pages/Oneiros";
import { AuthContext } from "./AuthContext";

export const endpoint = "http://127.0.0.1:8000";

const App = () => {
  const [name, setName] = useState("");
  const [college_name, setCollege_name] = useState("");
  const [email, setEmail] = useState("");
  const [event_name, setEvent_name] = useState("Oneiros");
  const [college_email, setCollege_email] = useState("");
  const [image, setImage] = useState("");
  const [event_date, setEvent_date] = useState("16-10-2022");
  const [event_time, setEvent_time] = useState("09:00");
  const [event_type, setEvent_type] = useState("Cultural Fest");
  const [register, setRegister] = useState(false);
  const [mobile, setMobile] = useState("");
  return (
    <AuthContext.Provider
      value={{
        name: [name, setName],
        college_name: [college_name, setCollege_name],
        email: [email, setEmail],
        event_name: [event_name, setEvent_name],
        college_email: [college_email, setCollege_email],
        image: [image, setImage],
        mobile: [mobile, setMobile],
        event_date: [event_date, setEvent_date],
        event_time: [event_time, setEvent_time],
        event_type: [event_type, setEvent_type],
        register: [register, setRegister],
      }}
    >
      <div>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/cultural" element={<Coding />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/oneiros" element={<Oneiros />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
