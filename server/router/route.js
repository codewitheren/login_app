import { Router } from "express";
import { register, registerMail, authenticate, login, user, generateOTP, verifyOTP, createResetSession, updateUser, resetPassword } from "../controllers/appController.js";

const router = Router();

// Post Methods
router.route("/register").post((req, res) => {
  register(req, res);
}); // register user

router.route("/register-mail").post((req, res) => {
    registerMail(req, res);
}); // send the mail

router.route("/authenticate").post((req, res) => {
    authenticate(req, res);
}); // authenticate user

router.route("/login").post((req, res) => {
    login(req, res);
}); // login in app

// Get Methods
router.route("/user/:username").get((req, res) => {
    user(req, res);
}); // get user by username

router.route("/generate-otp").get((req, res) => {
    generateOTP(req, res);
}); // generate OTP

router.route("/verify-otp").get((req, res) => {
    verifyOTP(req, res);
}); // verify OTP

router.route("/create-reset-session").get((req, res) => {
    createResetSession(req, res);
}); // reset all the variables

// Put Methods
router.route("/update-user").put((req, res) => {
    updateUser(req, res);
}); // update user

router.route("/reset-password").put((req, res) => {
    resetPassword(req, res);
}); // reset password

export default router;
