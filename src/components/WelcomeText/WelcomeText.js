import React from "react";
import "./welcometext.css";

const WelcomeText = ({ username }) => (
  <h2 className="welcome-text">Welcome, {username} </h2>
);

export default WelcomeText;
