import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/home";
import Chat from "./component/chat";
import Custom from "./component/custom";
import CharacterSet from './component/character';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/" element={<Home />} />
        <Route path="/character"  element={<CharacterSet />}/>
      </Routes>
    </Router>
  );
}

export default App;
