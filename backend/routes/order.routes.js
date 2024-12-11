import express from "express";
import {
  addOrder,
  getOrder,
  updateOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", addOrder);
router.get("/", getOrder);
router.put("/:id/status", updateOrder);

export default router;
