// import { useState } from "react";
import React, { useState } from "react";
import Footer from "../component/footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    first: "",
    lastname: "",
    email: "",
    password: "",
    profile: "",
  });
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("https://blog-6hj4.onrender.com/api/user/signup", post)
      .then((response) => {
        console.log(response);
        alert("success");
        navigate("/login");
      })
      .catch((error) => {
        alert("failed to create account");
        if (error.response) {
          console.log("Server responded with data:", error.response.data);
          console.log("Status code:", error.response.status);
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error message:", error.message);
        }
      });
  }

  return (
    <div className="container_login">
      <div className="form-wrapper">
        <h2>Sign up</h2>
        <br></br>
        <p>Dont have an account? register here</p>
        <form action="#" onSubmit={handleSubmit}>
          <div className="form-control">
            <input type="text" name="first" onChange={handleInput} />
            <label>firstname</label>
          </div>

          <div className="form-control">
            <input type="text" name="lastname" onChange={handleInput} />
            <label>Lastname</label>
          </div>

          <div className="form-control">
            <input type="text" name="email" onChange={handleInput} />
            <label>Email</label>
          </div>

          <div className="form-control">
            <input type="password" name="password" onChange={handleInput} />
            <label>Password</label>
          </div>
          <div className="file-input">
            <input
              type="file"
              id="profile"
              name="profile"
              accept="image/*"
              onChange={handleInput}
            ></input>
          </div>

          <button type="submit">Sign Up</button>
        </form>
        <p>
          <Link to="/login">Back to signIn</Link>
        </p>
      </div>
    </div>
  );
}
