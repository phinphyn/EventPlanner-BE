import jwt from "jsonwebtoken";
import {
  createEvent,
  findEventById,
  getAllEvents,
  updateEvent,
  deleteEvent,
  findEventsByAccountId,
  findEventsByStatus,
  findEventsByType,
} from "../models/Event.js";

export const getAllEventsController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const events = await getAllEvents();
    return res.status(200).json({
      status: 1,
      message: "Events retrieved successfully",
      events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const createEventController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_title, event_type, date, address_id, status } = req.body;

    if (!event_title || !date) {
      return res.status(400).json({ message: "Event title and date are required." });
    }

    // Kiểm tra address_id (nếu có) đã được sử dụng chưa
    if (address_id) {
      const existingEvent = await findEventById(address_id);
      if (existingEvent && existingEvent.address_id === parseInt(address_id)) {
        return res.status(400).json({ message: "Address is already assigned to another event." });
      }
    }

    const newEvent = await createEvent({
      event_title,
      event_type,
      date: new Date(date),
      status: status || "pending",
      account_id: decoded.account_id,
      address_id: address_id ? parseInt(address_id) : null,
    });

    return res.status(201).json({
      status: 1,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getEventByIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const event = await findEventById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    // Chỉ cho phép admin hoặc chủ sự kiện xem chi tiết
    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own events or need admin privileges." });
    }

    return res.status(200).json({
      status: 1,
      message: "Event retrieved successfully",
      event,
    });
  } catch (error) {
    console.error("Error retrieving event:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateEventController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;
    const { event_title, event_type, date, address_id, status } = req.body;

    const event = await findEventById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    // Chỉ cho phép admin hoặc chủ sự kiện cập nhật
    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only update your own events or need admin privileges." });
    }

    // Kiểm tra address_id (nếu có) đã được sử dụng chưa
    if (address_id && address_id !== event.address_id) {
      const existingEvent = await findEventById(address_id);
      if (existingEvent && existingEvent.address_id === parseInt(address_id)) {
        return res.status(400).json({ message: "Address is already assigned to another event." });
      }
    }

    const updateData = {};
    if (event_title) updateData.event_title = event_title;
    if (event_type) updateData.event_type = event_type;
    if (date) updateData.date = new Date(date);
    if (status) updateData.status = status;
    if (address_id !== undefined) updateData.address_id = address_id ? parseInt(address_id) : null;

    const updatedEvent = await updateEvent(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    console.error("Error updating event:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteEventController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const event = await findEventById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    // Chỉ cho phép admin xóa sự kiện
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    await deleteEvent(id);
    return res.status(200).json({
      status: 1,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getEventsByAccountIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { account_id } = req.params;

    // Chỉ cho phép admin hoặc chủ tài khoản xem sự kiện
    if (decoded.account_id !== parseInt(account_id) && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own events or need admin privileges." });
    }

    const events = await findEventsByAccountId(account_id);
    return res.status(200).json({
      status: 1,
      message: "Events retrieved successfully",
      events,
    });
  } catch (error) {
    console.error("Error fetching events by account ID:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getEventsByStatusController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { status } = req.query;
    if (!status) {
      return res.status(400).json({ message: "Status is required." });
    }

    const events = await findEventsByStatus(status);
    return res.status(200).json({
      status: 1,
      message: "Events retrieved successfully",
      events,
    });
  } catch (error) {
    console.error("Error fetching events by status:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getEventsByTypeController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { event_type } = req.query;
    if (!event_type) {
      return res.status(400).json({ message: "Event type is required." });
    }

    const events = await findEventsByType(event_type);
    return res.status(200).json({
      status: 1,
      message: "Events retrieved successfully",
      events,
    });
  } catch (error) {
    console.error("Error fetching events by type:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};