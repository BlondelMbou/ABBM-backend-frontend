import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/estiame (3).jpg";
import LogIn from "./Login/Login.jsx";
import SignUp from "./SingUp/SingUp";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ABBM Media</h1>
          <h4>Explore Estiam from inside</h4>
        </div>
      </div>
      <div className="b-left">
        <SignUp />
        <div className="spacing"></div>
        {/* <LogIn/> */}
      </div>
    </div>
  );
};

export default Auth;
