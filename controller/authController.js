import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

const prisma = new PrismaClient();
dotenv.config();

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET;

// API Đăng nhập
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Dữ liệu đăng nhập:", { email, password });

    if (!email || !password) {
      console.log("Thiếu email hoặc password");
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      console.log(`Không tìm thấy user với email: ${email}`);
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log(`Mật khẩu không đúng cho email: ${email}`);
      return res.status(401).json({ message: "Incorrect password." });
    }

    const token = jwt.sign(
      {
        user_id: user.user_id,
        role: user.role,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      status: 1,
      message: "Login successful",
      token,
      is_admin: user.role === "admin",
      user: {
        user_id: user.user_id,
        email: user.email,
        user_name: user.user_name,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    console.log("Dữ liệu yêu cầu:", req.body);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

// API Đăng ký
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

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email behav already used" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
        user_name,
        phone,
        role: "customer",
      },
    });

    const token = jwt.sign(
      {
        user_id: newUser.user_id,
        role: newUser.role,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      status: 1,
      message: "Account created successfully!",
      token,
    });
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    console.log("Dữ liệu yêu cầu:", req.body);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

// API Lấy danh sách tất cả người dùng
export const returnAllUsers = async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany();
    return res.status(200).json(allUsers);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tài khoản:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

// API Lấy thông tin người dùng theo user_id
export const returnUsersInfo = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await prisma.users.findUnique({
      where: { user_id: parseInt(user_id) },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Lỗi khi lấy thông tin tài khoản:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

// API lấy thông tin user từ token
export const getUserInfo = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const user = await prisma.users.findUnique({
      where: { user_id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Lỗi khi lấy thông tin user:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};

// API Refresh Token
export const refreshToken = async (req, res) => {
  try {
    const { user_id, role } = req.user;

    const newToken = jwt.sign(
      {
        user_id,
        role,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      status: 1,
      message: "Token refreshed successfully",
      token: newToken,
    });
  } catch (error) {
    console.error("Lỗi khi làm mới token:", error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};