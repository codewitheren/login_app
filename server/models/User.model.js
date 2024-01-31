import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username."],
        unique: [true, "Username already exists."],
        minlength: [3, "Username must be at least 3 characters."],
        maxlength: [32, "Username must be less than 32 characters."],
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
        minlength: [8, "Password must be at least 8 characters."],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "Email already exists."],
        maxlength: [32, "Email must be less than 32 characters."],
    },
    photo: {
        type: String,
        default: "default.jpg",
    },
});

const User = mongoose.model("User", UserSchema);

export default User;