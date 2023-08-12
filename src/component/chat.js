import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./chat.css";
import jsonData from "./test.json"

const API_KEY = "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";

const configuration = new Configuration({
  apiKey: API_KEY,
});
delete configuration.baseOptions.headers["User-Agent"];

const openai = new OpenAIApi(configuration);

function Chat() {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const addMessage = (role, content) => {
    setMessages((prevMessages) => [...prevMessages, { role, content }]);
  };

  

  useEffect(() => {
    const generateResponse = async () => {
      try {
        setLoading(true);

        const chatSettings = jsonData;

        const response = await openai.createChatCompletion({
          model: chatSettings.model,
          messages: messages,
          temperature: chatSettings.temperature,
          max_tokens: chatSettings.max_tokens,
          top_p: chatSettings.top_p,
          frequency_penalty: chatSettings.frequency_penalty,
          presence_penalty: chatSettings.presence_penalty,
        });

        const assistantResponse = response.data.choices[0].message.content;
        addMessage("assistant", assistantResponse);
        setLoading(false);
      } catch (error) {
        console.error("Error generating conversation:", error);
        setLoading(false);
      }
    };

    if (messages.length > 0) {
    // 이전 요청 이후에 5초 대기 후 새 요청 보내기
    const timeout = setTimeout(generateResponse, 5000);

    // 컴포넌트가 언마운트되거나 업데이트되면 타임아웃 클리어
    return () => clearTimeout(timeout);
    }
  }, [messages]);

  const handleUserMessage = (userInput) => {
    addMessage("user", userInput);
  };

  useEffect(() => {
    // JSON 데이터를 메시지 형식으로 변환하여 초기 메시지 생성
    const jsonMessages = jsonData.interactions.map((interaction) => ({
      role: interaction.role,
      content: interaction.content,
    }));

    setMessages(jsonMessages);
  }, []);

  return (
    <div className="Chat">

      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.content}
            </div>
          ))}
        </div>
        <div className="user-input">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleUserMessage(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
