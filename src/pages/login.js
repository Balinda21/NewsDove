import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Adminx from "./Admin";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Login() {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    axios
      .post("https://blog-6hj4.onrender.com/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        toast.success("Welcome back Admin", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        localStorage.setItem("token", response.data.token);
        navigate("/admin"); // Use navigate to redirect after successful login
      })
      .catch((error) => {
        alert("incorrect password");
        console.log(error);
      });
  };

  return (
    <div className="container_login">
      <div className="form-wrapper">
        <h2>Sign In</h2>
        <form action="#">
          <div className="form-control">
            <input type="email" value={email} onChange={handleEmail}></input>
            <label>Email or phone number</label>
          </div>
          <div className="form-control">
            <input
              type="password"
              value={password}
              onChange={handlePassword}
            ></input>
            <label>Password</label>
          </div>
          <button className="login-button" onClick={handleApi}>
            Sign in
          </button>

          <div className="form-help"></div>
        </form>
        <p>
          New to NewsBird?
          <Link to="/Signup">
            <br></br>
            <span className="reg">Register here</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
