// Import required components and styles
import React, { useState} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import "./home.css";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";

const { Title } = Typography;

function Home() {
    const [chatBots, setChatBots] = useState([
        { id: 1, name: 'ChatBot1' },
        { id: 2, name: 'ChatBot2' },
      ]);

    const handleAddChatBot = () => {
    const newChatBot = {
        id: chatBots.length + 1,
        name: `ChatBot${chatBots.length + 1}`,
    };
    setChatBots((prevChatBots) => [...prevChatBots, newChatBot]);
    };

  return (
    <div className="home-container">
      <div className="header">
        <Title className="home-title">CAKE Bot</Title>
        <Link to="/custom" className="link">
          custom
        </Link>
        <Link to="/sign" className="link">
          signin
        </Link>
        <div>
            <button onClick={handleAddChatBot}>Add ChatBot</button>
        </div>
      </div>
      <ul>
        <Row className="img-container" gutter={[20, 20]}>
            {chatBots.map((chatBot) => (
            <li key={chatBot.id}>
                <Link to={`/chat/${chatBot.name}`}>{
                        <Col xs={12} sm={8} md={6} lg={6} xl={6}>
                        <img src={image1} alt="" className="img-with-name" />
                        <span className="img-description">{chatBot.name}</span>
                        <span className="img-description"></span>
                    </Col>
                }</Link>
            </li>
            ))}
        </Row>
      </ul>
    </div>
  );
}

export default Home;