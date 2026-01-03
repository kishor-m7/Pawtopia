import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginSignup.css";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in!");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <header className="auth-header">
          <h1>
            <img src={logo} alt="Pawtopia Logo" className="home-logo" />{" "}
            Pawtopia 🐾
          </h1>
        </header>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <br />
          <br />
          <input type="password" placeholder="Password" required />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
