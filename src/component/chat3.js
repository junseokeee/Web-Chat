import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Link } from "react-router-dom";
import conversationData from "./conversationData.json";
import "./chat.css";

const API_KEY = "";

const configuration = new Configuration({
  apiKey: API_KEY,
});
delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);

const Chat3 = () => {
  const [messages, setMessages] = useState(conversationData);

  const [loading, setLoading] = useState(false);

  const addMessage = (role, content) => {
    setMessages((prevMessages) => [...prevMessages, { role, content }]);
  };

  useEffect(() => {
    const generateResponse = async () => {
      try {
        setLoading(true);
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages,
          temperature: 0.2,
          max_tokens: 200,
        });

        const assistantResponse = response.data.choices[0].message.content;
        addMessage("assistant", assistantResponse);
        setLoading(false);
      } catch (error) {
        console.error("Error generating conversation:", error);
        setLoading(false);
      }
    };

    if (messages[messages.length - 1].role === "user") {
      generateResponse();
    }
  }, [messages]);

  const handleUserMessage = (userInput, e) => {
    if (e.key === "Enter" && userInput.trim() !== "") {
      e.preventDefault();
      addMessage("user", userInput);
      e.target.value = "";
    }
  };

  return (
    <div className="Chat">
      <div className="chat-window">
        <div className="messages">
          {messages.slice(20).map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-content">{message.content}</div>
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="   하고 싶은 말을 작성해 보세요"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleUserMessage(e.target.value, e);
              }
            }}
          />
        </div>
      </div>
      <Link to="/" className="homeButton">
        홈으로
      </Link>
    </div>
  );
};

export default Chat3;
