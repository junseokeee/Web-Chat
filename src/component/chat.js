// import React, { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";


// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const Chat = () => {
//   const [inputMessage, setInputMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (inputMessage.trim() === "") return;

//     const newMessage = {
//       role: "user",
//       content: inputMessage,
//     };

//     setMessages([...messages, newMessage]);
//     setInputMessage("");

//     try {
//       const response = await openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [...messages, newMessage], // Include the new user message
//         temperature: 0.3,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//       });

//       const aiReply = response.data.choices[0].message.content;
//       const aiMessage = {
//         role: "ai",
//         content: aiReply,
//       };

//       setMessages([...messages, aiMessage]);
//     } catch (error) {
//       // Handle API error
//       console.error("Error fetching AI response:", error);
//     }
//   };


// return (
//   <div>
//     <div style={{ height: "300px", overflow: "auto" }}>
//       {messages.map((message, index) => (
//         <div
//           key={index}
//           style={{ textAlign: message.role === "user" ? "right" : "left" }}
//         >
//           <span
//             style={{
//               display: "inline-block",
//               padding: "5px",
//               backgroundColor: message.role === "user" ? "#ddd" : "#1e90ff",
//               color: "#fff",
//               borderRadius: "10px",
//             }}
//           >
//             {message.content}
//           </span>
//         </div>
//       ))}
//     </div>
//     <div>
//       <input type="text" value={inputMessage} onChange={handleInputChange} />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   </div>
// );
import React, { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './chat.css'; // Import your CSS file for styling

const API_KEY = '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';

const configuration = new Configuration({
  apiKey: API_KEY,
});
delete configuration.baseOptions.headers['User-Agent'];

const openai = new OpenAIApi(configuration);

function Chat() {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: "A conversation friend who listens to my concerns.\nHelps people with concerns to come up with results on their own.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const addMessage = (role, content) => {
    setMessages(prevMessages => [...prevMessages, { role, content }]);
  };

  useEffect(() => {
    const generateResponse = async () => {
      try {
        setLoading(true);
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages,
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });

        const assistantResponse = response.data.choices[0].message.content;
        addMessage('assistant', assistantResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error generating conversation:', error);
        setLoading(false);
      }
    };

    if (messages[messages.length - 1].role === 'user') {
      generateResponse();
    }
  }, [messages]);

  const handleUserMessage = userInput => {
    addMessage('user', userInput);
  };

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
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleUserMessage(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}


export default Chat;