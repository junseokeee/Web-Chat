// Chat.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const { chatName } = useParams();

  const chatMessages = {
  };
  
  const botMessages = {
  };
  
  const initialMessages = chatMessages[chatName]
    ? [...chatMessages[chatName]]
    : botMessages[chatName]
    ? [botMessages[chatName]]
    : [{ content: 'Hi! this is Bot', sender: 'ChatGPT' }];
  

  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const chatContainerRef = useRef(null);
  const chatWrapperRef = useRef(null);

  useEffect(() => {

    scrollToBottom();
  }, [messages]);


  const scrollToBottom = () => {
    if (chatWrapperRef.current) {
      chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newUserMessage = { content: newMessage, sender: 'User' };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
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
      <h1>Chat with {chatName}</h1>
      <div
        ref={chatWrapperRef}
        style={{
          border: '1px solid #ccc',
          maxHeight: '400px',
          overflowY: 'scroll',
        }}
      >
        <div
          ref={chatContainerRef}
          style={{
            minHeight: '200px',
            padding: '10px',
          }}
        >
          {messages.map((message, index) => (
            <div key={index} style={{ marginBottom: '5px', textAlign: message.sender === 'User' ? 'right' : 'left' }}>
              <strong>{message.sender}:</strong> {message.content}
            </div>
          ))}
        </div>
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
