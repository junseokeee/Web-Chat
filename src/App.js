import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Chat from "./component/chat";
import Chat3 from "./component/chat3";
import Custom from "./component/custom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat3" element={<Chat3 />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
