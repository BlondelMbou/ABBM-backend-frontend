import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import Logo from "../../../img/estiame (3).jpg";
import { useHistory } from "react-router-dom";

// axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.withCredentials = true

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

function LogIn() {
  const history = useHistory();
  function handleClick() {}
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    history.push("/");

    event.preventDefault();
    setusername("");
    setPassword("");
    // console.log("test");
    try {
      const response = await axios.post("/auth/login", {
        username: username,
        password: password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ABBM Media</h1>
          <h4>Explore Estiam from inside</h4>
        </div>
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={username}
              onChange={(event) => setusername(event.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
            <button
              className="button infoButton"
              type="submit"
              onClick={handleClick}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
