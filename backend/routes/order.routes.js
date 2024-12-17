import express from "express";
import {
  addOrder,
  getOrder,
  updateOrder,
  myOrder,
} from "../controllers/order.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, addOrder);
router.get("/", getOrder);
router.put("/:id/status", updateOrder);
router.get("/myOrder", authMiddleware, myOrder);

export default router;
