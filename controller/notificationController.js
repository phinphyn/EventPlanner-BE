import jwt from "jsonwebtoken";
import {
  createNotification,
  findNotificationById,
  getAllNotifications,
  updateNotification,
  deleteNotification,
  findNotificationsByAccountId,
  findUnreadNotifications,
} from "../models/Notification.js";

export const createNotificationController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { account_id, title, message, type } = req.body;

    if (!account_id || !title || !message) {
      return res.status(400).json({ message: "Account ID, title, and message are required." });
    }

    const newNotification = await createNotification({
      account_id: parseInt(account_id),
      title,
      message,
      type,
      is_read: false,
      email_sent: false,
    });

    return res.status(201).json({
      status: 1,
      message: "Notification created successfully",
      notification: newNotification,
    });
  } catch (error) {
    console.error("Error creating notification:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllNotificationsController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const notifications = await getAllNotifications();
    return res.status(200).json({
      status: 1,
      message: "Notifications retrieved successfully",
      notifications,
    });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getNotificationByIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const notification = await findNotificationById(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    if (decoded.account_id !== notification.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own notifications or need admin privileges." });
    }

    return res.status(200).json({
      status: 1,
      message: "Notification retrieved successfully",
      notification,
    });
  } catch (error) {
    console.error("Error retrieving notification:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateNotificationController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;
    const { title, message, type, is_read, email_sent } = req.body;

    const notification = await findNotificationById(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    if (decoded.account_id !== notification.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only update your own notifications or need admin privileges." });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (message) updateData.message = message;
    if (type) updateData.type = type;
    if (is_read !== undefined) updateData.is_read = is_read;
    if (email_sent !== undefined) updateData.email_sent = email_sent;

    const updatedNotification = await updateNotification(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Notification updated successfully",
      notification: updatedNotification,
    });
  } catch (error) {
    console.error("Error updating notification:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteNotificationController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const notification = await findNotificationById(id);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found." });
    }

    if (decoded.account_id !== notification.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only delete your own notifications or need admin privileges." });
    }

    await deleteNotification(id);
    return res.status(200).json({
      status: 1,
      message: "Notification deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting notification:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getNotificationsByAccountIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { account_id } = req.params;

    if (decoded.account_id !== parseInt(account_id) && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own notifications or need admin privileges." });
    }

    const notifications = await findNotificationsByAccountId(account_id);
    return res.status(200).json({
      status: 1,
      message: "Notifications retrieved successfully",
      notifications,
    });
  } catch (error) {
    console.error("Error fetching notifications by account ID:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getUnreadNotificationsController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { account_id } = req.params;

    if (decoded.account_id !== parseInt(account_id) && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own notifications or need admin privileges." });
    }

    const notifications = await findUnreadNotifications(account_id);
    return res.status(200).json({
      status: 1,
      message: "Unread notifications retrieved successfully",
      notifications,
    });
  } catch (error) {
    console.error("Error fetching unread notifications:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};