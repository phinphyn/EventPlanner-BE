// serviceMiddleware.js
import { PrismaClient } from "@prisma/client";

// Khởi tạo Prisma Client (sử dụng instance từ req nếu có)
const prisma = new PrismaClient();

// Middleware kiểm tra dữ liệu đầu vào cho dịch vụ
export const validateServiceInput = (req, res, next) => {
  const { name, description, price, category } = req.body;

  // Kiểm tra các trường bắt buộc
  if (!name || !description || !price) {
    return res.status(400).json({
      message: "Name, description, and price are required fields.",
    });
  }

  // Kiểm tra định dạng price (phải là số và không âm)
  if (isNaN(price) || price < 0) {
    return res.status(400).json({
      message: "Price must be a non-negative number.",
    });
  }

  // Lưu dữ liệu đã được kiểm tra vào req để sử dụng sau
  req.validatedServiceData = {
    name,
    description,
    price: parseFloat(price),
    category: category || null,
  };

  next();
};

// Middleware kiểm tra quyền sở hữu dịch vụ
export const checkServiceOwnership = async (req, res, next) => {
  try {
    const { id } = req.params; // ID của dịch vụ từ route
    const userId = req.user?.userId; // Lấy userId từ validateToken

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Giả định dịch vụ có trường user_id (nếu schema có liên kết với người tạo dịch vụ)
    const service = await prisma.services.findUnique({
      where: { id: parseInt(id) },
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Kiểm tra nếu service có user_id và so sánh với userId hiện tại
    // Lưu ý: Điều này chỉ áp dụng nếu schema services có trường user_id
    if (service.user_id && service.user_id !== userId) {
      return res.status(403).json({
        message: "You do not have permission to modify this service.",
      });
    }

    // Lưu thông tin dịch vụ vào req để sử dụng sau
    req.service = service;
    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking service ownership", error: error.message });
  }
};

// Middleware kiểm tra vai trò admin hoặc chủ sở hữu
export const checkAdminOrOwner = async (req, res, next) => {
  try {
    const userRole = req.user?.role; // Lấy role từ validateToken
    const { id } = req.params; // ID của dịch vụ từ route

    if (!userRole) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    // Kiểm tra nếu là admin
    if (userRole === "admin") {
      const service = await prisma.services.findUnique({
        where: { id: parseInt(id) },
      });
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      req.service = service;
      return next();
    }

    // Nếu không phải admin, kiểm tra quyền sở hữu
    const service = await prisma.services.findUnique({
      where: { id: parseInt(id) },
    });

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    if (service.user_id && service.user_id !== req.user.userId) {
      return res.status(403).json({
        message: "You do not have permission to modify this service.",
      });
    }

    req.service = service;
    next();
  } catch (error) {
    res.status(500).json({ message: "Error checking admin or ownership", error: error.message });
  }
};