import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Chat from "./component/Chat";
import Custom from "./component/Custom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
