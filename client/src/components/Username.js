import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.webp";
import "../styles/Username.css";

function Username() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Welcome</h1>
          <p>Explore more by connecting with us</p>
        </div>
        <div className="card-body">
          <img src={avatar} alt="avatar" />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button type="submit">Let's Go</button>
            <p>Are you new here? <Link to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Username;
