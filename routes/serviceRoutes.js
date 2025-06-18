import express from "express";
import {
  getAllServicesController,
  createServiceController,
  getServiceByIdController,
  updateServiceController,
  deleteServiceController,
  findServiceByNameController,
  findServiceByCategoryController,
} from "../controller/servicesController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllServicesController);
router.post("/", validateToken, validateAdmin, createServiceController);
router.get("/:id", getServiceByIdController);
router.put("/:id", validateToken, validateAdmin, updateServiceController);
router.delete("/:id", validateToken, validateAdmin, deleteServiceController);
router.get("/search/name", findServiceByNameController);
router.get("/search/category", findServiceByCategoryController);

export default router;