import { Router } from "express";
import * as controller from "../controllers/appController.js";
import auth from "../middleware/auth.js";

const router = Router();

//? Post Methods
//* Register user
router.route("/register").post((req, res) => {
  controller.register(req, res);
});

//* Send the mail
router.route("/register-mail").post((req, res) => {
  controller.registerMail(req, res);
});

//* Authenticate user
router.route("/authenticate").post((req, res) => {
  controller.authenticate(req, res);
});

//* Login in app
router.route("/login").post(controller.verifyUser, (req, res) => {
  controller.login(req, res);
});

//? GEt Methods
//* Get user by username
router.route("/user/:username").get((req, res) => {
  controller.getUser(req, res);
});

//* Generate OTP
router.route("/generate-otp").get((req, res) => {
  controller.generateOTP(req, res);
});

//* Verify OTP
router.route("/verify-otp").get((req, res) => {
  controller.verifyOTP(req, res);
});

//* Reset all the variables
router.route("/create-reset-session").get((req, res) => {
  controller.createResetSession(req, res);
});

//? Put Methods
//* Update user
router.route("/update-user").put(auth, (req, res) => {
  controller.updateUser(req, res);
});

//* Reset password
router.route("/reset-password").put((req, res) => {
  controller.resetPassword(req, res);
}); // reset password

export default router;
