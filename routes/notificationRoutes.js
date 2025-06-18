import express from "express";
import {
  createNotificationController,
  getAllNotificationsController,
  getNotificationByIdController,
  updateNotificationController,
  deleteNotificationController,
  getNotificationsByAccountIdController,
  getUnreadNotificationsController,
} from "../controller/notificationController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, validateAdmin, createNotificationController);
router.get("/", validateToken, validateAdmin, getAllNotificationsController);
router.get("/:id", validateToken, getNotificationByIdController);
router.put("/:id", validateToken, updateNotificationController);
router.delete("/:id", validateToken, deleteNotificationController);
router.get("/account/:account_id", validateToken, getNotificationsByAccountIdController);
router.get("/unread/:account_id", validateToken, getUnreadNotificationsController);

export default router;