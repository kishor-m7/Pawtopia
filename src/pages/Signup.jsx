import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginSignup.css";
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Account created!");
    navigate("/login");
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

        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Name" required />
          <br />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <br />
          <input type="password" placeholder="Password" required />
          <br />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
