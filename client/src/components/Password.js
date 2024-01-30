import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import "../styles/Username.css";

function Password() {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-y"
            />
            <button type="submit">Let's Go</button>
            <p>
              Forgot your password? <Link to="/recovery">Recover Now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
