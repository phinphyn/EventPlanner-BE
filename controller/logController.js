import jwt from "jsonwebtoken";
import {
  createLog,
  findLogById,
  getAllLogs,
  deleteLog,
  findLogsByAccountId,
} from "../models/Log.js";

export const createLogController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { account_id, action, details } = req.body;

    if (!action) {
      return res.status(400).json({ message: "Action is required." });
    }

    const newLog = await createLog({
      account_id: account_id ? parseInt(account_id) : null,
      action,
      details: details || {},
    });

    return res.status(201).json({
      status: 1,
      message: "Log created successfully",
      log: newLog,
    });
  } catch (error) {
    console.error("Error creating log:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllLogsController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const logs = await getAllLogs();
    return res.status(200).json({
      status: 1,
      message: "Logs retrieved successfully",
      logs,
    });
  } catch (error) {
    console.error("Error fetching logs:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getLogByIdController = async (req, res) => {
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

    const log = await findLogById(id);
    if (!log) {
      return res.status(404).json({ message: "Log not found." });
    }

    return res.status(200).json({
      status: 1,
      message: "Log retrieved successfully",
      log,
    });
  } catch (error) {
    console.error("Error retrieving log:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteLogController = async (req, res) => {
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

    const log = await findLogById(id);
    if (!log) {
      return res.status(404).json({ message: "Log not found." });
    }

    await deleteLog(id);
    return res.status(200).json({
      status: 1,
      message: "Log deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting log:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getLogsByAccountIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { account_id } = req.params;

    const logs = await findLogsByAccountId(account_id);
    return res.status(200).json({
      status: 1,
      message: "Logs retrieved successfully",
      logs,
    });
  } catch (error) {
    console.error("Error fetching logs by account ID:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};