import jwt from "jsonwebtoken";
import {
  createAddress,
  findAddressById,
  getAllAddresses,
  updateAddress,
  deleteAddress,
  findAddressesByAccountId,
} from "../models/Address.js";

export const createAddressController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { street, city, state, country, postal_code, latitude, longitude, event_id } = req.body;

    if (!street || !city || !country) {
      return res.status(400).json({ message: "Street, city, and country are required." });
    }

    const newAddress = await createAddress({
      street,
      city,
      state,
      country,
      postal_code,
      latitude: latitude ? parseFloat(latitude) : null,
      longitude: longitude ? parseFloat(longitude) : null,
      account_id: decoded.account_id,
      event_id: event_id ? parseInt(event_id) : null,
    });

    return res.status(201).json({
      status: 1,
      message: "Address created successfully",
      address: newAddress,
    });
  } catch (error) {
    console.error("Error creating address:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllAddressesController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const addresses = await getAllAddresses();
    return res.status(200).json({
      status: 1,
      message: "Addresses retrieved successfully",
      addresses,
    });
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAddressByIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const address = await findAddressById(id);
    if (!address) {
      return res.status(404).json({ message: "Address not found." });
    }

    if (decoded.account_id !== address.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own addresses or need admin privileges." });
    }

    return res.status(200).json({
      status: 1,
      message: "Address retrieved successfully",
      address,
    });
  } catch (error) {
    console.error("Error retrieving address:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateAddressController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;
    const { street, city, state, country, postal_code, latitude, longitude, event_id } = req.body;

    const address = await findAddressById(id);
    if (!address) {
      return res.status(404).json({ message: "Address not found." });
    }

    if (decoded.account_id !== address.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only update your own addresses or need admin privileges." });
    }

    const updateData = {};
    if (street) updateData.street = street;
    if (city) updateData.city = city;
    if (state) updateData.state = state;
    if (country) updateData.country = country;
    if (postal_code) updateData.postal_code = postal_code;
    if (latitude !== undefined) updateData.latitude = latitude ? parseFloat(latitude) : null;
    if (longitude !== undefined) updateData.longitude = longitude ? parseFloat(longitude) : null;
    if (event_id !== undefined) updateData.event_id = event_id ? parseInt(event_id) : null;

    const updatedAddress = await updateAddress(id, updateData);
    return res.status(200).json({
      status: 1,
      message: "Address updated successfully",
      address: updatedAddress,
    });
  } catch (error) {
    console.error("Error updating address:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteAddressController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = req.params;

    const address = await findAddressById(id);
    if (!address) {
      return res.status(404).json({ message: "Address not found." });
    }

    if (decoded.account_id !== address.account_id && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only delete your own addresses or need admin privileges." });
    }

    await deleteAddress(id);
    return res.status(200).json({
      status: 1,
      message: "Address deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting address:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAddressesByAccountIdController = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { account_id } = req.params;

    if (decoded.account_id !== parseInt(account_id) && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only view your own addresses or need admin privileges." });
    }

    const addresses = await findAddressesByAccountId(account_id);
    return res.status(200).json({
      status: 1,
      message: "Addresses retrieved successfully",
      addresses,
    });
  } catch (error) {
    console.error("Error fetching addresses by account ID:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};