import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="back flex justify-center items-center">
      <div className="flex justify-center items-center bg-white">
        <div>
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Sign In to Your Account</h2>

        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="text" name="remember" value="true" id="" />
        </form>
        <input>

        </input>
      
      </div>
    </div>
  );
};

export default SignIn;
