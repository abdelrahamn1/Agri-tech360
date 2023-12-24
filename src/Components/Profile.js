import Button from "./Button";
import "../css/profile.css";
import manfarmer from "../images/manfarmer.png";
import womenfarmer from "../images/womenfarmer.png";
import { useState } from "react";

function Profile() {
  const [psswordVisible, SetPasswordVisible] = useState(false);
  const PasswordVisible = () => {
    SetPasswordVisible(!psswordVisible);
  };
  const [showSignUp, setShowSignUp] = useState(true);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const signupimg = document.querySelector(".sign-up .flex-imge");
  const signupnputs = document.querySelector(
    ".sign-up .container .flex-inputs"
  );
  const signuph2 = document.querySelector(".sign-up h2");
  const signupbtn = document.querySelector(".signup-btn");
  const signuptext = document.querySelector(".signup-text");
  const login = document.querySelector(".log-in ");
  console.log(signuptext);
  const display = () => {
    if (login.style.display === "block") {
      login.style.display = "none";
      signupimg.style.display = "block";
      signupnputs.style.display = "block";
      signuph2.style.display = "block";
      signupbtn.style.display = "block";
      signuptext.style.display = "block";
    } else {
      login.style.display = "block";
      signupimg.style.display = "none";
      signupnputs.style.display = "none";
      signuph2.style.display = "none";
      signupbtn.style.display = "none";
      signuptext.style.display = "none";
    }
  };

  console.log(login);

  return (
    <>
      <form action="/" method="post">
        <div className="sign-up">
          <h2>Sign Up!</h2>
          <div className="container">
            <div className="flex-imge" data-aos="fade-up">
              <img
                className="man"
                src={manfarmer}
                alt="farmer"
                data-aos="fade-right"
              ></img>
              <img className="woman" src={womenfarmer} alt="farmer"></img>
            </div>
            <div className="flex-inputs" data-aos="fade-left">
              <input type="text" placeholder="Full Name"></input>
              <input type="email" placeholder="e-mail"></input>
              <i class="fa-regular fa-eye" onClick={PasswordVisible}></i>
              <input
                id="password"
                type={psswordVisible ? "text" : "password"}
                placeholder="Password"
              ></input>
              <input type="Text" placeholder="City"></input>
            </div>
            <Button className="signup-btn" name="Sign-Up"></Button>
            <div className="signup-text">
              <p>
                Already have account? <span onClick={display}>Sign In</span>
              </p>
            </div>
          </div>
        </div>
        <div className="log-in">
          <h2>Log in!</h2>
          <div className="container">
            <div className="flex-imge">
              <img className="man" src={manfarmer} alt="farmer"></img>
              <img className="woman" src={womenfarmer} alt="farmer"></img>
            </div>
            <div className="flex-inputs">
              <input type="email" placeholder="e-mail"></input>
              <i class="fa-regular fa-eye" onClick={PasswordVisible}></i>
              <input
                id="passwordlog"
                type={psswordVisible ? "text" : "password"}
                placeholder="Password"
              ></input>
            </div>
            <Button className="login-btn" name="Log in"></Button>
            <div className="login-text">
              <p>
                Don't have an account? <span onClick={display}>Sign Up!</span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Profile;
