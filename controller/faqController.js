import jwt from "jsonwebtoken";
import {
  createFaq,
  findFaqById,
  getAllFaqs,
  updateFaq,
  deleteFaq,
} from "../models/Faq.js";

export const createFaqController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { question, answer } = req.body;

    if (!question || !answer) {
      return res.status(400).json({ message: "Question and answer are required." });
    }

    const newFaq = await createFaq({
      question,
      answer,
    });

    return res.status(201).json({
      status: 1,
      message: "FAQ created successfully",
      faq: newFaq,
    });
  } catch (error) {
    console.error("Error creating FAQ:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllFaqsController = async (req, res) => {
  try {
    const faqs = await getAllFaqs();
    return res.status(200).json({
      status: 1,
      message: "FAQs retrieved successfully",
      faqs,
    });
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getFaqByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await findFaqById(id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found." });
    }

    return res.status(200).json({
      status: 1,
      message: "FAQ retrieved successfully",
      faq,
    });
  } catch (error) {
    console.error("Error retrieving FAQ:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateFaqController = async (req, res) => {
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
    const { question, answer } = req.body;

    const faq = await findFaqById(id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found." });
    }

    const updateData = {};
    if (question) updateData.question = question;
    if (answer) updateData.answer = answer;

    const updatedFaq = await updateFaq(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "FAQ updated successfully",
      faq: updatedFaq,
    });
  } catch (error) {
    console.error("Error updating FAQ:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteFaqController = async (req, res) => {
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

    const faq = await findFaqById(id);
    if (!faq) {
      return res.status(404).json({ message: "FAQ not found." });
    }

    await deleteFaq(id);
    return res.status(200).json({
      status: 1,
      message: "FAQ deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};