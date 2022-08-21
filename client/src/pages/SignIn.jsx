import React, { useState } from "react";
import "./SignIn.css";
import SignInForm from "../components/SignInForm";
import { useSnackbar } from "notistack";
import axios from "axios";
import { endpoint } from "../App";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
const { AuthContext } = require("../AuthContext");

const SignIn = () => {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { name, email, college_name, college_email, image, mobile } =
    React.useContext(AuthContext);
  const [name1, setName] = name;
  const [email1, setEmail] = email;
  const [college_name1, setCollege_name] = college_name;
  const [college_email1, setCollege_email] = college_email;
  const [image1, setImage] = image;
  const [mobile1, setMobile] = mobile;

  const data = {
    email: emailid,
    password: password,
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmailid(value);
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
        setName(res.data.name);
        setCollege_name(res.data.college_name);
        setEmail(res.data.email);
        setCollege_email(res.data.c_email);
        setImage(res.data.profile_URL);
        setMobile(res.data.mobile);
        setLoading(false);
        navigate("/");
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
