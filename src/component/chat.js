import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const apiUrl = "ba25db12697d62154d2f121091d9aeb2"; // KoGPT API endpoint (e.g., your backend server URL that interfaces with KoGPT)

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") {
      return;
    }

    // Add the user message to the list
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, sender: "user" },
    ]);
    setInputMessage("");

    try {
      // Call the KoGPT API to get a response
      const response = await axios.post(apiUrl, { message: inputMessage });

      // Add the KoGPT response to the list
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.message, sender: "kogpt" },
      ]);
    } catch (error) {
      console.error("Error fetching response from KoGPT:", error);
      // Handle error if necessary
    }
  };

  return (
    <div>
      <div style={{ height: "300px", overflow: "auto" }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{ textAlign: message.sender === "user" ? "right" : "left" }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "5px",
                backgroundColor: message.sender === "user" ? "#ddd" : "#1e90ff",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={inputMessage} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
