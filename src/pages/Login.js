import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const enabled = data.email.length > 0 && data.password.length > 0;

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSignInFormData = (event) => {
    if (event.target.name === "email") {
      if (!event.target.value) {
        setError({ ...error, email: "This field is required.", password: "" });
      } else if (event.target.value && !isValidEmail(event.target.value)) {
        setError({ ...error, email: "Email is invalid." });
      } else {
        setData({ ...data, email: event.target.value });
        setError({ ...error, email: "" });
      }
    } else if (event.target.name === "password") {
      if (!event.target.value) {
        setError({ ...error, password: "This field is required." });
      } else {
        setData({ ...data, password: event.target.value });
        setError({ ...error, password: "" });
      }
    }
  };

  const handleSignInSubmit = () => {
    
    console.log(data,"============>data")
    setData({ ...data, email: data.email, password: data.password });
    console.log(data,'<><><><><><')
    console.log(localStorage.getItem("values"), "=======>localStorage.getItem")
    const getUserArr = localStorage.getItem("values");
    console.log(getUserArr, "<><><><><data2");
    if (getUserArr && getUserArr.length) {
      const userData = JSON.parse(getUserArr);
      console.log(userData, "==========>userData")
      const userLogin = userData.filter((el) => {
        return el.email === data.email && el.password === data.password;
      });
       console.log(userLogin,'<><><><>userLogin')
      if (userLogin.length === 0) {
        alert("invalid details");
       } else {
        console.log("user login successfully");

        console.log(data,'<><><><><><')
        if(data){
          navigate("/home");
        }
        localStorage.setItem("user_login", JSON.stringify(data));
      }
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="Login-form">
          <h3 className="title">LOGIN</h3>
          <div className="form">
            <div className="input-group">
              <i className="fa fa-envelope form-icon" aria-hidden="true"></i>
              <label className="email">EMAIL :</label>
              <input type="email" name="email" placeholder="Enter your email" onChange={(e) => handleSignInFormData(e)} />
              <h3 className="errorEmailStyle">{error.email}</h3>
            </div>
            <div className="input-group">
              <i className="fa fa-lock form-icon" aria-hidden="true"></i>
              <label className="password">PASSWORD :</label>
              <input type="password" name="password" placeholder="Enter your password" onChange={(e) => handleSignInFormData(e)} />
              <h3 className="errorStyle">{error.password}</h3>
            </div>
            <button className="submit" type="button" disabled={!enabled} onClick={() => handleSignInSubmit()} > LOGIN </button>
            <div className="login-here">
              <h3>Do not have an Account?</h3>
              <Link to="/">
                <h3 className="logged">Signup Here</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
