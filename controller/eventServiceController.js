import jwt from "jsonwebtoken";
import {
  addEventService,
  findEventServiceById,
  getAllEventServicesByEvent,
  updateEventService,
  deleteEventService,
} from "../models/EventService.js";

export const addEventServiceController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_id, service_id, quantity } = req.body;

    if (!event_id || !service_id) {
      return res.status(400).json({ message: "Event ID and Service ID are required." });
    }

    const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only add services to your own events or need admin privileges." });
    }

    const newEventService = await addEventService({
      event_id: parseInt(event_id),
      service_id: parseInt(service_id),
      quantity: quantity ? parseInt(quantity) : 1,
    });

    return res.status(201).json({
      status: 1,
      message: "Service added to event successfully",
      eventService: newEventService,
    });
  } catch (error) {
    console.error("Error adding service to event:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getEventServiceByIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_id, service_id } = req.params;

    const eventService = await findEventServiceById(event_id, service_id);
    if (!eventService) {
      return res.status(404).json({ message: "Event service not found." });
    }

    const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own event services or need admin privileges." });
    }

    return res.status(200).json({
      status: 1,
      message: "Event service retrieved successfully",
      eventService,
    });
  } catch (error) {
    console.error("Error retrieving event service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllEventServicesByEventController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_id } = req.params;

    const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own event services or need admin privileges." });
    }

    const eventServices = await getAllEventServicesByEvent(event_id);
    return res.status(200).json({
      status: 1,
      message: "Event services retrieved successfully",
      eventServices,
    });
  } catch (error) {
    console.error("Error fetching event services:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateEventServiceController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_id, service_id } = req.params;
    const { quantity } = req.body;

    const eventService = await findEventServiceById(event_id, service_id);
    if (!eventService) {
      return res.status(404).json({ message: "Event service not found." });
    }

    const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only update your own event services or need admin privileges." });
    }

    const updateData = {};
    if (quantity !== undefined) updateData.quantity = parseInt(quantity);

    const updatedEventService = await updateEventService(event_id, service_id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Event service updated successfully",
      eventService: updatedEventService,
    });
  } catch (error) {
    console.error("Error updating event service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteEventServiceController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_id, service_id } = req.params;

    const eventService = await findEventServiceById(event_id, service_id);
    if (!eventService) {
      return res.status(404).json({ message: "Event service not found." });
    }

    const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only delete your own event services or need admin privileges." });
    }

    await deleteEventService(event_id, service_id);
    return res.status(200).json({
      status: 1,
      message: "Event service deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting event service:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};