import React, { useState } from "react";
import "../styles/Username.css";

function Recovery() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("OTP must be 6 digits");
    } else {
      setError("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Recovery</h1>
          <p>Enter OTP to reset your password</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <p className="otp">Enter 6 digit OTP sent to your email</p>
            <input
              type="password"
              placeholder="Password"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              autoComplete="off"
            />
            <button type="submit">Sign In</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
