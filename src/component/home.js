// Home.js
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import image1 from "../img/image1.png";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Home Page</h1>
      <Link to="/custom" className="custom-link">
        Go to Custom
      </Link>
      <div className="img-container">
        <Link to="/chat">
          <img src={image1} alt="" />
        </Link>
        <Link to="/chat">
          <img src={image1} alt="" />
        </Link>
        <Link to="/chat">
          <img src={image1} alt="" />
        </Link>
        <Link to="/chat">
          <img src={image1} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
