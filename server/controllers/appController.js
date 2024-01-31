import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//! Middleware for verifying user
const verifyUser = async (req, res, next) => {
  try {
    //* Get user data from request body or query
    const user = req.method === "GET" ? req.query : req.body;

    //* Check if user exists
    const existUser = await UserModel.findOne({ username: user.username });
    if (!existUser) {
      throw new Error("User does not exists.");
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//? POST: /api/register
//* body: {
//*    username: String,
//*    email: String,
//*    password: String,
//*    photo: String
//* }
const register = async (req, res) => {
  // Get user data from request body
  const { username, email, password, photo } = req.body;
  try {
    // Check if username or email already exists
    const existUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });
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

    // Send response
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//? POST: /api/register-mail
const registerMail = async (req, res) => {
  res.json({ message: "Register Mail" });
};

//? POST: /api/authenticate
const authenticate = async (req, res) => {
  res.json({ message: "Authenticate" });
};

//? POST: /api/login
//* body: {
//*    username: String,
//*    password: String
//* }
const login = async (req, res) => {
  //* Get user data from request body
  const { username, password } = req.body;
  try {
    //* Check if user exists
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw new Error("User does not exists.");
    }

    //* Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid credentials.");
    }

    //* Create JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    //* Send response
    res.status(200).json({
      message: "User logged in successfully.",
      username: user.username,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//? GET: /api/user/username
//* params: {
//*    username: String
//* }
const getUser = async (req, res) => {
  //* Get username from request params
  const { username } = req.params;
  console.log(username);

  try {
    if (!username) {
      throw new Error("Username is required.");
    }
    //* Check if user exists
    const user = await UserModel.findOne({ username });
    if (!user) {
      throw new Error("User does not exists.");
    }

    //* Remove password from user object
    const { password, ...rest } = user._doc;

    //* Send response
    res.status(200).json({
      message: "User found successfully.",
      user: rest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//? GET: /api/generate-otp
const generateOTP = async (req, res) => {
  res.json({ message: "Generate OTP" });
};

//? GET: /api/verify-otp
const verifyOTP = async (req, res) => {
  res.json({ message: "Verify OTP" });
};

//? GET: /api/create-reset-session
const createResetSession = async (req, res) => {
  res.json({ message: "Create Reset Session" });
};

//? PUT: /api/update-user
//* body: {
//*    photo: String
//* }
//* auth: JWT token
const updateUser = async (req, res) => {
  try {
    const { id } = req.user;
    //* Check if user exists
    if (!id) {
      throw new Error("User does not exists.");
    }

    //* Update user photo
    const { photo } = req.body;
    const user = await UserModel.findOneAndUpdate(
      { _id: id },
      { photo },
      { new: true }
    );
    if (!user) {
      throw new Error("User does not exists.");
    }

    //* Send response
    const { password, ...rest } = user._doc;
    res.status(201).json({
      message: "User updated successfully.",
      user: rest,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//? PUT: /api/reset-password
const resetPassword = async (req, res) => {
  res.json({ message: "Reset Password" });
};

//! Export all controllers
export {
  verifyUser,
  register,
  registerMail,
  authenticate,
  login,
  getUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  updateUser,
  resetPassword,
};
