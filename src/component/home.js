import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/chat">Go to Chat</Link>
        </li>
        <li>
          <Link to="/custom">Go to Custom</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
