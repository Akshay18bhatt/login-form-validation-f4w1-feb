import React, { useState } from "react";
import Email from "./Components/Email";
import Password from "./Components/Password";
import "./loginForm.css";

const App = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  // let isEmail= true, isPassword= true, isConfirmPassword= true;
  // console.log(isEmail);
  // console.log(isPassword);
  // console.log(isConfirmPassword);

  function executeLogin(e) {

    e.preventDefault();
    if (isEmail && isPassword && isConfirmPassword) {
      alert("Form Submitted Successfully ✅");
    } else {
      alert("Cannot Submit Form!🚫");
    }

  }

  return (
    <div className="form-container">

        <form onSubmit={executeLogin} className="form">
            <h1>Login to enter into Game!</h1>

            <Email setIsEmail={setIsEmail} />

            <Password
            setIsPassword={setIsPassword}
            setIsConfirmPassword={setIsConfirmPassword}
            />

            <button className="sbt-btn">Submit</button>
        </form>
        <div className="forgot">
            <strong>Forgot <span>Password</span>?</strong>
            <span><em>Don't have an account?</em><strong> Sign Up</strong></span>
        </div>
    </div>
  );
};

export default App;
