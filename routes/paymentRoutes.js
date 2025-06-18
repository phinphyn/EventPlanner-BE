import express from "express";
import {
  createPaymentController,
  getAllPaymentsController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
  getPaymentsByEventIdController,
  getPaymentsByStatusController,
} from "../controller/paymentController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, createPaymentController);
router.get("/", validateToken, validateAdmin, getAllPaymentsController);
router.get("/:id", validateToken, getPaymentByIdController);
router.put("/:id", validateToken, validateAdmin, updatePaymentController);
router.delete("/:id", validateToken, validateAdmin, deletePaymentController);
router.get("/event/:event_id", validateToken, getPaymentsByEventIdController);
router.get("/status", validateToken, validateAdmin, getPaymentsByStatusController);

export default router;