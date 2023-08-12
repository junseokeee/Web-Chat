import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Chat from './component/Chat';
import Sign from './component/Sign';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/sign" element={<signin />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
