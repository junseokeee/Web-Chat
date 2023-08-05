import React from 'react';

const ChatList = () => {
  const chatBots = [
    { id: 1, name: 'ChatBot 1' },
    { id: 2, name: 'ChatBot 2' },
    // Add more chatbots here...
  ];

  return (
    <div>
      <h1>ChatBot List</h1>
      <ul>
        {chatBots.map((chatBot) => (
          <li key={chatBot.id}>
            <a href={`/chat/${chatBot.id}`}>{chatBot.name}</a>
          </li>
        ))}
      </ul>
      <p>
        This is the ChatList component. Click on a chatbot name to view its chat.
      </p>
    </div>
  );
};

export default ChatList;
