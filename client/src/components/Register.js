import React, { useState } from "react";
import avatar from "../assets/avatar.svg";

function Register() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePreview, setImagePreview] = useState(avatar);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(file);
    console.log(email);
    console.log(password);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1>Register</h1>
          <p>Create an account</p>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="avatar">
              {imagePreview && <img src={imagePreview} alt="avatar" />}
              <input
                type="file"
                id="avatar"
                name="avatar"
                required
                onChange={handleFileChange}
              />
            </label>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;