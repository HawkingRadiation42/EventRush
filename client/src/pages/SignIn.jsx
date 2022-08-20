import React, { useState } from "react";
import "./SignIn.css";
import SignInForm from "../components/SignInForm";
import { useSnackbar } from "notistack";
import axios from "axios";
import { endpoint } from "../App";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const data = {
    email: email,
    password: password,
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      enqueueSnackbar("Please fill all the fields", { variant: "warning" });
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(`${endpoint}/login`, data);
      if (res.status === 200) {
        enqueueSnackbar("Logged in successfully", { variant: "success" });
        console.log(res);
        localStorage.setItem("Loggedin", true);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("college_name", res.data.college_name);
        localStorage.setItem("email", res.data.email);
        // localStorage.setItem("dp", res.data.profile_URL);
        // alert(res.data.profile_URL)
        setLoading(false);
        // navigate("/");
      }
    } catch (error) {
      enqueueSnackbar("Check your email or password", { variant: "error" });
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="back flex justify-center items-center my-auto">
        <SignInForm
          handleTextChange={handleTextChange}
          handleSubmit={handleSubmit}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default SignIn;
