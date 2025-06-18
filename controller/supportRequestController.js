import jwt from "jsonwebtoken";
import {
  createSupportRequest,
  findSupportRequestById,
  getAllSupportRequests,
  updateSupportRequest,
  deleteSupportRequest,
  findSupportRequestsByAccountId,
  findSupportRequestsByStatus,
} from "../models/SupportRequest.js";

export const createSupportRequestController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { subject, description, event_id } = req.body;

    if (!subject || !description) {
      return res.status(400).json({ message: "Subject and description are required." });
    }

    if (event_id) {
      const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
      if (!event) {
        return res.status(404).json({ message: "Event not found." });
      }
      if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
        return res.status(403).json({ message: "Access denied. You can only create support requests for your own events." });
      }
    }

    const newSupportRequest = await createSupportRequest({
      subject,
      description,
      event_id: event_id ? parseInt(event_id) : null,
      account_id: decoded.account_id,
      status: "pending",
    });

    return res.status(201).json({
      status: 1,
      message: "Support request created successfully",
      supportRequest: newSupportRequest,
    });
  } catch (error) {
    console.error("Error creating support request:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllSupportRequestsController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const supportRequests = await getAllSupportRequests();
    return res.status(200).json({
      status: 1,
      message: "Support requests retrieved successfully",
      supportRequests,
    });
  } catch (error) {
    console.error("Error fetching support requests:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getSupportRequestByIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const supportRequest = await findSupportRequestById(id);
    if (!supportRequest) {
      return res.status(404).json({ message: "Support request not found." });
    }

    if (decoded.account_id !== supportRequest.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own support requests or need admin privileges." });
    }

    return res.status(200).json({
      status: 1,
      message: "Support request retrieved successfully",
      supportRequest,
    });
  } catch (error) {
    console.error("Error retrieving support request:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateSupportRequestController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;
    const { subject, description, status, resolved_at } = req.body;

    const supportRequest = await findSupportRequestById(id);
    if (!supportRequest) {
      return res.status(404).json({ message: "Support request not found." });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const updateData = {};
    if (subject) updateData.subject = subject;
    if (description) updateData.description = description;
    if (status) updateData.status = status;
    if (resolved_at) updateData.resolved_at = new Date(resolved_at);

    const updatedSupportRequest = await updateSupportRequest(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Support request updated successfully",
      supportRequest: updatedSupportRequest,
    });
  } catch (error) {
    console.error("Error updating support request:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteSupportRequestController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const supportRequest = await findSupportRequestById(id);
    if (!supportRequest) {
      return res.status(404).json({ message: "Support request not found." });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    await deleteSupportRequest(id);
    return res.status(200).json({
      status: 1,
      message: "Support request deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting support request:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getSupportRequestsByAccountIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { account_id } = req.params;

    if (decoded.account_id !== parseInt(account_id) && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own support requests or need admin privileges." });
    }

    const supportRequests = await findSupportRequestsByAccountId(account_id);
    return res.status(200).json({
      status: 1,
      message: "Support requests retrieved successfully",
      supportRequests,
    });
  } catch (error) {
    console.error("Error fetching support requests by account ID:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getSupportRequestsByStatusController = async (req, res) => {
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

    const supportRequests = await findSupportRequestsByStatus(status);
    return res.status(200).json({
      status: 1,
      message: "Support requests retrieved successfully",
      supportRequests,
    });
  } catch (error) {
    console.error("Error fetching support requests by status:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};