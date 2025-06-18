import express from "express";
import {
  createFaqController,
  getAllFaqsController,
  getFaqByIdController,
  updateFaqController,
  deleteFaqController,
} from "../controller/faqController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, validateAdmin, createFaqController);
router.get("/", getAllFaqsController);
router.get("/:id", getFaqByIdController);
router.put("/:id", validateToken, validateAdmin, updateFaqController);
router.delete("/:id", validateToken, validateAdmin, deleteFaqController);

export default router;