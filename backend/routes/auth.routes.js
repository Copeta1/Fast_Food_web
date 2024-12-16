import express from "express";
import {
  login,
  logout,
  signup,
  getAuth,
  updateUserRoleHandler,
  getUserProfile,
  updateProfile,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAuth);
router.get("/me", authMiddleware, getUserProfile);
router.patch("/:userId/role", updateUserRoleHandler);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updateProfile", authMiddleware, updateProfile);

export default router;
