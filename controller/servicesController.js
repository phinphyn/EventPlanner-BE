import jwt from "jsonwebtoken";
import {
  createService,
  findServiceById,
  getAllServices,
  updateService,
  deleteService,
  findServiceByName,
  findServiceByCategory,
} from "../models/Service.js";

export const getAllServicesController = async (req, res) => {
  try {
    const services = await getAllServices();
    return res.status(200).json({
      status: 1,
      message: "Services retrieved successfully",
      services,
    });
  } catch (error) {
    console.error("Error fetching services:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const createServiceController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { service_name, description, price, category } = req.body;
    if (!service_name || !price) {
      return res.status(400).json({ message: "Service name and price are required." });
    }

    const existingService = await findServiceByName(service_name);
    if (existingService) {
      return res.status(400).json({ message: "Service name already exists." });
    }

    const newService = await createService({
      service_name,
      description,
      price: parseFloat(price),
      category,
    });

    return res.status(201).json({
      status: 1,
      message: "Service created successfully",
      service: newService,
    });
  } catch (error) {
    console.error("Error creating service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getServiceByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await findServiceById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    return res.status(200).json({
      status: 1,
      message: "Service retrieved successfully",
      service,
    });
  } catch (error) {
    console.error("Error retrieving service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateServiceController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { id } = req.params;
    const { service_name, description, price, category } = req.body;

    const service = await findServiceById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    const updateData = {};
    if (service_name) {
      const existingService = await findServiceByName(service_name);
      if (existingService && existingService.service_id !== parseInt(id)) {
        return res.status(400).json({ message: "Service name already exists." });
      }
      updateData.service_name = service_name;
    }
    if (description) updateData.description = description;
    if (price) updateData.price = parseFloat(price);
    if (category) updateData.category = category;

    const updatedService = await updateService(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    console.error("Error updating service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteServiceController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { id } = req.params;
    const service = await findServiceById(id);
    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    await deleteService(id);
    return res.status(200).json({
      status: 1,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const findServiceByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: "Service name is required." });
    }

    const service = await findServiceByName(name);
    if (!service) {
      return res.status(404).json({ message: "Service not found." });
    }

    return res.status(200).json({
      status: 1,
      message: "Service retrieved successfully",
      service,
    });
  } catch (error) {
    console.error("Error finding service by name:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const findServiceByCategoryController = async (req, res) => {
  try {
    const { category } = req.query;
    if (!category) {
      return res.status(400).json({ message: "Category is required." });
    }

    const services = await findServiceByCategory(category);
    if (services.length === 0) {
      return res.status(404).json({ message: "No services found for this category." });
    }

    return res.status(200).json({
      status: 1,
      message: "Services retrieved successfully",
      services,
    });
  } catch (error) {
    console.error("Error finding services by category:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};