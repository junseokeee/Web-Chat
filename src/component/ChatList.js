// ChatList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChatList = () => {
  const [chatBots, setChatBots] = useState([
    { id: 1, name: 'ChatBot 1' },
    { id: 2, name: 'ChatBot 2' },
  ]);

  const handleAddChatBot = () => {
    const newChatBot = {
      id: chatBots.length + 1,
      name: `ChatBot ${chatBots.length + 1}`,
    };
    setChatBots((prevChatBots) => [...prevChatBots, newChatBot]);
  };

  return (
    <div>
      <h1>ChatBot List</h1>
      <ul>
        {chatBots.map((chatBot) => (
          <li key={chatBot.id}>
            <Link to={`/chat/${chatBot.name}`}>{chatBot.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleAddChatBot}>Add ChatBot</button>
      <p>This is the ChatList component. Click on a chatbot name to view its chat.</p>
    </div>
  );
};

export default ChatList;
