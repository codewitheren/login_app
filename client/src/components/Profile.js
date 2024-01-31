import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.svg";

function Profile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePreview, setImagePreview] = useState(avatar);


  useEffect(() => {
    //Download image from server
    // Display user info
  }, []);

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
          <h1>Profile</h1>
          <p>Update your profile</p>
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
              value={username}
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              disabled
            />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;