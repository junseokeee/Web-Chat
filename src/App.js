import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Chat from './component/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
