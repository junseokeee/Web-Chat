// Chat.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { chatId } = useParams();

  const chatMessages = {
    
  };

  const [messages, setMessages] = useState(chatMessages[chatId] || []);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newChatMessage = { content: newMessage, sender: 'User' };
      setMessages((prevMessages) => [...prevMessages, newChatMessage]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div>
      <h1>Chat with ChatBot {chatId}</h1>
      <div style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '5px', textAlign: message.sender === 'User' ? 'right' : 'left' }}>
            <strong>{message.sender}:</strong> {message.content}
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
