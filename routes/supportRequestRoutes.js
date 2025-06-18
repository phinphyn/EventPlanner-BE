import express from "express";
import {
  createSupportRequestController,
  getAllSupportRequestsController,
  getSupportRequestByIdController,
  updateSupportRequestController,
  deleteSupportRequestController,
  getSupportRequestsByAccountIdController,
  getSupportRequestsByStatusController,
} from "../controller/supportRequestController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, createSupportRequestController);
router.get("/", validateToken, validateAdmin, getAllSupportRequestsController);
router.get("/:id", validateToken, getSupportRequestByIdController);
router.put("/:id", validateToken, validateAdmin, updateSupportRequestController);
router.delete("/:id", validateToken, validateAdmin, deleteSupportRequestController);
router.get("/account/:account_id", validateToken, getSupportRequestsByAccountIdController);
router.get("/status", validateToken, validateAdmin, getSupportRequestsByStatusController);

export default router;