import express from "express";
import {
  addEventServiceController,
  getEventServiceByIdController,
  getAllEventServicesByEventController,
  updateEventServiceController,
  deleteEventServiceController,
} from "../controller/eventServiceController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, addEventServiceController);
router.get("/:event_id/:service_id", validateToken, getEventServiceByIdController);
router.get("/event/:event_id", validateToken, getAllEventServicesByEventController);
router.put("/:event_id/:service_id", validateToken, updateEventServiceController);
router.delete("/:event_id/:service_id", validateToken, deleteEventServiceController);

export default router;