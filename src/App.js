import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatList from './component/ChatList';
import Chat from './component/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatList />} />
        <Route path="/chat/:chatId" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
