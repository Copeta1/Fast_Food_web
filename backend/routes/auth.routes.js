import express from "express";
import {
  login,
  logout,
  signup,
  getAuth,
  updateUserRoleHandler,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", getAuth);

router.patch("/:userId/role", updateUserRoleHandler);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
