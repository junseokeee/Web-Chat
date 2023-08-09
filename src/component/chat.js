// Chat.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};

const Chat = () => {
  const { chatName } = useParams();

  const chatMessages = {
    // 챗봇의 메시지 내용...
  };
  
  const botMessages = {
    // 봇의 메시지 내용...
  };


    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);  

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }
  
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
    // 메시지가 추가될 때마다 스크롤을 아래로 이동
    scrollToBottom();
  }, [messages]);

  //GPT가 보내주는 메시지
  useEffect(() => {

    return () => {
      clearInterval(botInterval);
    };
  }, []);

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
