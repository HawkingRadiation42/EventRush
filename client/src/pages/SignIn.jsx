import React, { useState } from "react";
import "./SignIn.css";
import SignInForm from "../components/SignInForm";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { useSnackbar } from "notistack";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [collegeEmail, setCollegeEmail] = useState("");
  const storage = getStorage(app);
  const { enqueueSnackbar } = useSnackbar();

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      
      case "collegeEmail":
        setCollegeEmail(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      email.length === 0 ||
      password.length === 0 ||
      collegeEmail.length === 0
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
        getDownloadURL(ref(storage, `jklu/${email}/${name}`)).then((url) =>
          setImageurl(url)
        );
      });
    }
  };

  return (
    <div className="back flex justify-center items-center">
      <SignInForm
        handleTextChange={handleTextChange}
        // handleUploadImageClick={handleUploadImageClick}
        // handleUploadClick={handleUploadClick}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignIn;
