import React, { useState } from "react";
import axios from "axios";
import "./SingUp.css";
import { useHistory } from "react-router-dom";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};

function SignUp() {
  const history = useHistory();
  function handleClick() {
  }
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    history.push("/login");
    event.preventDefault();

    setFirstname("");
    setLastname("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    try {
      const response = await axios.post("/auth/register", {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        confirm_password: confirmPassword,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>SingUp</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>

        <div>
          <span style={{ fontSize: "8px" }}>
            Already have an account. Login
          </span>
        </div>
        <button
          className="button infoButton"
           type="submit"
          onClick={handleClick}
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignUp;
