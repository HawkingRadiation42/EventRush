import React, { useState } from "react";
import "./SignIn.css";
import SignInForm from "../components/SignInForm";
import app from "../firebase";
import { useSnackbar } from "notistack";
import axios from "axios";
import { endpoint } from "../App";
import { useNavigate } from "react-router-dom";

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
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      enqueueSnackbar("Check your email or password", { variant: "ERROR" });
      setLoading(false);
    }
  };

  return (
    <div className="back flex justify-center items-center">
      <SignInForm
        handleTextChange={handleTextChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignIn;
