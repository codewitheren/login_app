import React, { useState } from "react";
import "../styles/Username.css";

function Reset() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Reset</h1>
          <p>Enter new password</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="New password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
            ></input>
            <button type="submit">Reset</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reset;
