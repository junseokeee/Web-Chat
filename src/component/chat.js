// Chat.js
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Configuration, OpenAIApi } from 'openai';
import './chat.css';

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


// const Chat = () => {
//   const { chatName } = useParams();

//   const chatMessages = {
//   };
  
//   const botMessages = {
//   };
  
//   const initialMessages = chatMessages[chatName]
//     ? [...chatMessages[chatName]]
//     : botMessages[chatName]
//     ? [botMessages[chatName]]
//     : [{ content: 'Hi! this is Bot', sender: 'ChatGPT' }];
  

//   const [messages, setMessages] = useState(initialMessages);
//   const [newMessage, setNewMessage] = useState('');

//   const chatContainerRef = useRef(null);
//   const chatWrapperRef = useRef(null);

//   useEffect(() => {

//     scrollToBottom();
//   }, [messages]);


//   const scrollToBottom = () => {
//     if (chatWrapperRef.current) {
//       chatWrapperRef.current.scrollTop = chatWrapperRef.current.scrollHeight;
//     }
//   };

//   const handleInputChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== '') {
//       const newUserMessage = { content: newMessage, sender: 'User' };
//       setMessages((prevMessages) => [...prevMessages, newUserMessage]);
//       setNewMessage('');
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();

//     }
//   };

//   return (
//     <div>
//       <h1>Chat with {chatName}</h1>
//       <div
//         ref={chatWrapperRef}
//         style={{
//           border: '1px solid #ccc',
//           maxHeight: '400px',
//           overflowY: 'scroll',
//         }}
//       >
//         <div
//           ref={chatContainerRef}
//           style={{
//             minHeight: '200px',
//             padding: '10px',
//           }}
//         >
//           {messages.map((message, index) => (
//             <div key={index} style={{ marginBottom: '5px', textAlign: message.sender === 'User' ? 'right' : 'left' }}>
//               <strong>{message.sender}:</strong> {message.content}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div style={{ marginTop: '10px' }}>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

export default Chat;
