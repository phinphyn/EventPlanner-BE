import jwt from "jsonwebtoken";
import {
  createPayment,
  findPaymentById,
  getAllPayments,
  updatePayment,
  deletePayment,
  findPaymentsByEventId,
  findPaymentsByStatus,
} from "../models/Payment.js";

export const createPaymentController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { event_id, amount, payment_method } = req.body;

    if (!event_id || !amount) {
      return res.status(400).json({ message: "Event ID and amount are required." });
    }

    const event = await prisma.event.findUnique({ where: { event_id: parseInt(event_id) } });
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only create payments for your own events or need admin privileges." });
    }

    const newPayment = await createPayment({
      event_id: parseInt(event_id),
      amount: parseFloat(amount),
      payment_method,
      status: "pending",
    });

    return res.status(201).json({
      status: 1,
      message: "Payment created successfully",
      payment: newPayment,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllPaymentsController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const payments = await getAllPayments();
    return res.status(200).json({
      status: 1,
      message: "Payments retrieved successfully",
      payments,
    });
  } catch (error) {
    console.error("Error fetching payments:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getPaymentByIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const payment = await findPaymentById(id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found." });
    }

    const event = await prisma.event.findUnique({ where: { event_id: payment.event_id } });
    if (decoded.account_id !== event.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own payments or need admin privileges." });
    }

    return res.status(200).json({
      status: 1,
      message: "Payment retrieved successfully",
      payment,
    });
  } catch (error) {
    console.error("Error retrieving payment:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updatePaymentController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;
    const { amount, payment_method, status } = req.body;

    const payment = await findPaymentById(id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found." });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const updateData = {};
    if (amount) updateData.amount = parseFloat(amount);
    if (payment_method) updateData.payment_method = payment_method;
    if (status) updateData.status = status;

    const updatedPayment = await updatePayment(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Payment updated successfully",
      payment: updatedPayment,
    });
  } catch (error) {
    console.error("Error updating payment:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deletePaymentController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const payment = await findPaymentById(id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found." });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    await deletePayment(id);
    return res.status(200).json({
      status: 1,
      message: "Payment deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting payment:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getPaymentsByEventIdController = async (req, res) => {
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
      return res.status(403).json({ message: "Access denied. You can only view your own payments or need admin privileges." });
    }

    const payments = await findPaymentsByEventId(event_id);
    return res.status(200).json({
      status: 1,
      message: "Payments retrieved successfully",
      payments,
    });
  } catch (error) {
    console.error("Error fetching payments by event ID:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getPaymentsByStatusController = async (req, res) => {
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

    const payments = await findPaymentsByStatus(status);
    return res.status(200).json({
      status: 1,
      message: "Payments retrieved successfully",
      payments,
    });
  } catch (error) {
    console.error("Error fetching payments by status:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};