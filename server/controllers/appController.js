import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";

//* POST: /api/register
//* body: {
//*    username: String,
//*    email: String,
//*    password: String,
//*    photo: String
//* }
const register = async (req, res) => {
  try {
    // Get user data from request body
    const { username, email, password, photo } = req.body;
    
    // Check if username or email already exists
    const existUser = await UserModel.findOne({ $or: [{ username }, { email }] });
    if (existUser) {
      throw new Error("Username or Email already exists.");
    }

    // Hash password
    const bcryptSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

    // Create new user
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      photo,
    }); 
    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//* POST: /api/register-mail
const registerMail = async (req, res) => {
  res.json({ message: "Register Mail" });
};

//* POST: /api/authenticate
const authenticate = async (req, res) => {
  res.json({ message: "Authenticate" });
};

//* POST: /api/login
const login = async (req, res) => {
  res.json({ message: "Login" });
};

//* GET: /api/user/:username
const user = async (req, res) => {
  res.json({ message: "User" });
};

//* GET: /api/generate-otp
const generateOTP = async (req, res) => {
  res.json({ message: "Generate OTP" });
};

//* GET: /api/verify-otp
const verifyOTP = async (req, res) => {
  res.json({ message: "Verify OTP" });
};

//* GET: /api/create-reset-session
const createResetSession = async (req, res) => {
  res.json({ message: "Create Reset Session" });
};

//* PUT: /api/update-user
const updateUser = async (req, res) => {
  res.json({ message: "Update User" });
};

//* PUT: /api/reset-password
const resetPassword = async (req, res) => {
  res.json({ message: "Reset Password" });
};

export {
  register,
  registerMail,
  authenticate,
  login,
  user,
  generateOTP,
  verifyOTP,
  createResetSession,
  updateUser,
  resetPassword,
};
