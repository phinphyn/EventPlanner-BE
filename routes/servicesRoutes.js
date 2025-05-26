// routes/services.js
import express from "express";
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  findServiceByCategory,
} from "../controller/servicesController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";
import {
  validateServiceInput,
  checkServiceOwnership,
  checkAdminOrOwner,
} from "../middleware/serviceMiddleware.js";

const router = express.Router();

// Route công khai (không cần đăng nhập)
router.get("/", getAllServices);
router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const services = await findServiceByCategory(req, res);
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route cần đăng nhập để xem chi tiết (tùy chọn)
router.get("/:id", validateToken, getServiceById);

// Route tạo dịch vụ (chỉ admin)
router.post(
  "/",
  validateToken,
  validateAdmin,
  validateServiceInput,
  async (req, res) => {
    try {
      const newService = await createService(req, res, req.validatedServiceData);
      res.status(201).json({
        status: 1,
        message: "Service created successfully",
        service: newService,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Route cập nhật dịch vụ (admin hoặc chủ sở hữu)
router.put(
  "/:id",
  validateToken,
  checkAdminOrOwner,
  validateServiceInput,
  async (req, res) => {
    try {
      const updatedService = await updateService(req, res, req.validatedServiceData);
      res.status(200).json({
        status: 1,
        message: "Service updated successfully",
        service: updatedService,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Route xóa dịch vụ (admin hoặc chủ sở hữu)
router.delete(
  "/:id",
  validateToken,
  checkAdminOrOwner,
  async (req, res) => {
    try {
      await deleteService(req, res);
      res.status(200).json({ status: 1, message: "Service deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;