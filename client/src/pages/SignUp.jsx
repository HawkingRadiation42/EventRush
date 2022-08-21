import React, { useEffect, useState } from "react";
import "./SignUp.css";
import SignUpForm from "../components/SignUpForm";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { useSnackbar } from "notistack";
import axios from "axios";
import { endpoint } from "../App";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const [imageurl, setImageurl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState("");
  const storage = getStorage(app);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const data = {
    profile_URL: imageurl,
    email: email,
    password: password,
    name: name,
    age: age,
    gender: gender,
    college_name: college,
    c_email: collegeEmail,
    mobile: mobile,
  };

  useEffect(() => {
    if (imageurl) {
      sendData();
    }
  }, [imageurl]);

  const sendData = async () => {
    try {
      const res = await axios.post(`${endpoint}/register`, data);
      if (res.status === 201) {
        enqueueSnackbar("Submitted successfully", { variant: "success" });
        navigate("/signin");
        setLoading(false);
      } else {
        enqueueSnackbar("Error creating post", { variant: "error" });
      }
    } catch (error) {
      console.log(error);
    }
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
      case "name":
        setName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "college":
        setCollege(value);
        break;
      case "collegeEmail":
        setCollegeEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      default:
        break;
    }
  };

  const handleUploadImageClick = (e) => {
    e.preventDefault();
    document.getElementById("upload").click();
  };

  const handleUploadClick = (e) => {
    e.preventDefault();
    const file = document.getElementById("upload").files[0];
    const button = document.getElementById("uploadtext");
    button.innerHTML = file.name;
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      name.length === 0 ||
      password.length === 0 ||
      email.length === 0 ||
      !age ||
      gender.length === 0 ||
      college.length === 0 ||
      collegeEmail.length === 0 ||
      mobile.length === 0
    ) {
      enqueueSnackbar("Please fill all the fields", { variant: "warning" });
      setLoading(false);
      return;
    }
    const file = document.getElementById("upload").files[0];
    console.log(file);
    if (!file) {
      enqueueSnackbar("Please upload an image", { variant: "warning" });
      setLoading(false);
      return;
    }
    if (file) {
      const storageRef = ref(storage, `${email}/${name}`);
      await uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(ref(storage, `${email}/${name}`)).then((url) =>
          setImageurl(url)
        );
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="back flex justify-center items-center">
        <SignUpForm
          handleTextChange={handleTextChange}
          handleUploadImageClick={handleUploadImageClick}
          handleUploadClick={handleUploadClick}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignUp;
