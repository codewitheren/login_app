import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//* Authentification middleware
const auth = async (req, res, next) => {
  try {
    //* Get token from request header
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("No token provided.");
    }
    
    //* Verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      throw new Error("Invalid token.");
    }

    //* Set user id in request
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default auth;
