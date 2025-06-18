import express from "express";
import {
  getAllEventsController,
  createEventController,
  getEventByIdController,
  updateEventController,
  deleteEventController,
  getEventsByAccountIdController,
  getEventsByStatusController,
  getEventsByTypeController,
} from "../controller/eventController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", validateToken, validateAdmin, getAllEventsController);
router.post("/", validateToken, createEventController);
router.get("/:id", validateToken, getEventByIdController);
router.put("/:id", validateToken, updateEventController);
router.delete("/:id", validateToken, validateAdmin, deleteEventController);
router.get("/account/:account_id", validateToken, getEventsByAccountIdController);
router.get("/status", validateToken, validateAdmin, getEventsByStatusController);
router.get("/type", validateToken, validateAdmin, getEventsByTypeController);

export default router;