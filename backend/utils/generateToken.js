import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token validity for 1 day
  });

  res.cookie("jwt", token, {
    httpOnly: true, // Prevents JavaScript access to the cookie
    secure: process.env.NODE_ENV === "production", // Ensures cookie is sent over HTTPS in production
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  });
};

export default generateTokenAndSetCookie;
