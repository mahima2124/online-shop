import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const enabled = data.email.length > 0 && data.password.length > 0;

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSignInFormData = (event) => {
    if (event.target.name === 'email') {
      if (!event.target.value) {
        setError({ ...error, email: 'This field is required.', password: '' });
      } else if (event.target.value && !isValidEmail(event.target.value)) {
        setError({ ...error, email: 'Email is invalid.' });
      } else {
        setData({ ...data, email: event.target.value });
        setError({ ...error, email: '' });
      }
    } else if (event.target.name === 'password') {
      if (!event.target.value) {
        setError({ ...error, password: 'This field is required.' });
      } else {
        setData({ ...data, password: event.target.value });
        setError({ ...error, password: '' });
      }
    }
  };

  const handleSignInSubmit = () => {
    setData({ ...data, email: data.email, password: data.password });
    const getUserArr = localStorage.getItem('values');
    if (getUserArr && getUserArr.length) {
      const userData = JSON.parse(getUserArr);
      const userLogin = userData.filter((el) => el.email === data.email && el.password === data.password);
      if (userLogin.length === 0) {
        // alert('invalid details');
      } else {
        // console.log('user login successfully');
        if (data) {
          navigate('/home');
        }
        localStorage.setItem('user_login', JSON.stringify(data));
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
              <i className="fa fa-envelope form-icon" aria-hidden="true" />
              <label htmlFor="email" className="email">EMAIL :</label>
              <input type="email" name="email" placeholder="Enter your email" onChange={(e) => handleSignInFormData(e)} />
              <h3 className="errorEmailStyle">{error.email}</h3>
            </div>
            <div className="input-group">
              <i className="fa fa-lock form-icon" aria-hidden="true" />
              <label htmlFor="email" className="password">PASSWORD :</label>
              <input type="password" name="password" placeholder="Enter your password" onChange={(e) => handleSignInFormData(e)} />
              <h3 className="errorStyle">{error.password}</h3>
            </div>
            <button className="submit" type="button" disabled={!enabled} onClick={() => handleSignInSubmit()}> LOGIN </button>
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
}

export default Login;
