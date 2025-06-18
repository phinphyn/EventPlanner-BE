import express from "express";
import {
  createLogController,
  getAllLogsController,
  getLogByIdController,
  deleteLogController,
  getLogsByAccountIdController,
} from "../controller/logController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, validateAdmin, createLogController);
router.get("/", validateToken, validateAdmin, getAllLogsController);
router.get("/:id", validateToken, validateAdmin, getLogByIdController);
router.delete("/:id", validateToken, validateAdmin, deleteLogController);
router.get("/account/:account_id", validateToken, validateAdmin, getLogsByAccountIdController);

export default router;