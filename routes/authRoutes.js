import express from "express";
import {
  register,
  login,
  returnAllUsers,
  returnUsersInfo,
  getUserInfo,
  refreshToken,
} from "../controller/authController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/users", validateToken, validateAdmin, returnAllUsers);
router.get("/users/:user_id", validateToken, returnUsersInfo);
router.get("/me", validateToken, getUserInfo);
router.post("/refresh", validateToken, refreshToken);

export default router;