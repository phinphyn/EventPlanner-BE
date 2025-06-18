import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createUser, findUserByEmail, findUserById, getAllUsers, updateUser, deleteUser } from '../models/Account.js';

dotenv.config();
const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const account = await findUserByEmail(email);
    if (!account) {
      return res.status(404).json({ message: "Account not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, account.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    const token = jwt.sign({ account_id: account.user_id, role: account.role }, jwtSecret, { expiresIn: "1h" });
    return res.status(200).json({
      status: 1,
      message: "Login successful",
      token,
      is_admin: account.role === "admin",
      account: {
        account_id: account.user_id,
        email: account.email,
        user_name: account.user_name,
        phone: account.phone,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const register = async (req, res) => {
  try {
    const { user_name, email, phone, password } = req.body;
    if (!user_name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long." });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const existingAccount = await findUserByEmail(email);
    if (existingAccount) {
      return res.status(400).json({ message: "Email has already been used" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newAccount = await createUser({
      email,
      password: hashedPassword,
      user_name,
      phone,
      role: "customer",
    });

    const token = jwt.sign({ account_id: newAccount.user_id, role: newAccount.role }, jwtSecret, { expiresIn: "1h" });
    return res.status(201).json({
      status: 1,
      message: "Account created successfully!",
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAllAccounts = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, jwtSecret);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const accounts = await getAllUsers();
    return res.status(200).json({
      status: 1,
      message: "Accounts retrieved successfully",
      accounts: accounts.map(account => ({
        account_id: account.user_id,
        email: account.email,
        user_name: account.user_name,
        phone: account.phone,
        role: account.role,
      })),
    });
  } catch (error) {
    console.error("Error retrieving accounts:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const getAccountById = async (req, res) => {
  try {
    const { id } = req.params;
    const account = await findUserById(id);
    if (!account) {
      return res.status(404).json({ message: "Account not found." });
    }

    return res.status(200).json({
      status: 1,
      message: "Account retrieved successfully",
      account: {
        account_id: account.user_id,
        email: account.email,
        user_name: account.user_name,
        phone: account.phone,
        role: account.role,
      },
    });
  } catch (error) {
    console.error("Error retrieving account:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, phone, password } = req.body;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, jwtSecret);
    const account = await findUserById(id);
    if (!account) {
      return res.status(404).json({ message: "Account not found." });
    }

    if (decoded.account_id !== parseInt(id) && decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. You can only update your own account or need admin privileges." });
    }

    const updateData = {};
    if (user_name) updateData.user_name = user_name;
    if (phone) updateData.phone = phone;
    if (password) {
      if (password.length < 8) {
        return res.status(400).json({ message: "Password must be at least 8 characters long." });
      }
      updateData.password = await bcrypt.hash(password, saltRounds);
    }

    const updatedAccount = await updateUser(id, updateData); // Sử dụng hàm updateUser từ model
    return res.status(200).json({
      status: 1,
      message: "Account updated successfully",
      account: {
        account_id: updatedAccount.user_id,
        email: updatedAccount.email,
        user_name: updatedAccount.user_name,
        phone: updatedAccount.phone,
        role: updatedAccount.role,
      },
    });
  } catch (error) {
    console.error("Error updating account:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided." });
    }

    const decoded = jwt.verify(token, jwtSecret);
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const account = await findUserById(id);
    if (!account) {
      return res.status(404).json({ message: "Account not found." });
    }

    await deleteUser(id); // Sử dụng hàm deleteUser từ model
    return res.status(200).json({
      status: 1,
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting account:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};