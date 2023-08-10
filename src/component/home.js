import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./home.css";
import logo from "../img/logo1.png";
import musk from "../img/musk.jpg";
import bill from "../img/Bill.jpeg";
import ai from "../img/image3.jpeg";
function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h3 className="home-title">
          <img src={logo} alt="" className="logo" />
        </h3>
        <Link to="/custom" className="custom-link">
          AI 만들기
        </Link>
      </div>
      <Row className="img-container" gutter={[20, 20]}>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={musk} alt="" className="img-with-name rounded-image" />
          </Link>
          <span className="img-description-bold">일론 머스크</span>
          <span className="img-description">
            일론 리브 머스크는 남아프리카 공화국 출신 미국의 기업인이다.
            페이팔의 전신이 된 온라인 결제 서비스 ...
          </span>
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={bill} alt="" className="img-with-name rounded-image" />
          </Link>
          <span className="img-description-bold">빌 게이츠</span>
          <span className="img-description">
            윌리엄 헨리 빌 게이츠 3세는 미국의 마이크로소프트 설립자이자
            기업인이다. 그는 당시 프로그래밍 언어인 ...
          </span>{" "}
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={ai} alt="" className="img-with-name rounded-image" />
          </Link>
          <span className="img-description-bold">Image 3</span>
          <span className="img-description">Description</span>{" "}
        </Col>
        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
          <Link to="/chat">
            <img src={logo} alt="" className="img-with-name" />
          </Link>
          <span className="img-description">Image 4</span>
          <span className="img-description">Description</span>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
