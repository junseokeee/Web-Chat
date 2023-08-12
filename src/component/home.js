// Import required components and styles
import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import "./home.css";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";

const { Title } = Typography;

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <Title className="home-title">CAKE Bot</Title>
        <Link to="/custom" className="custom-link">
          custom
        </Link>
      </div>
      <Row className="img-container" gutter={[20, 20]}>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={image1} alt="" className="img-with-name" />
          </Link>
          <span className="img-description">Image 1</span>
          <span className="img-description">Description</span>
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={image2} alt="" className="img-with-name" />
          </Link>
          <span className="img-description">Image 2</span>
          <span className="img-description">Description</span>{" "}
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={image3} alt="" className="img-with-name" />
          </Link>
          <span className="img-description">Image 3</span>
          <span className="img-description">Description</span>{" "}
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/custom">
            <img src={image4} alt="" className="img-with-name" />
          </Link>
          <span className="img-description">Image 4</span>
          <span className="img-description">Description</span>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
