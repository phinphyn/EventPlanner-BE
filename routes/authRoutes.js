import express from "express";
import {
  register,
  login,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
} from "../controller/authController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/users", validateToken, validateAdmin, getAllAccounts);
router.get("/users/:id", validateToken, getAccountById);
router.get("/me", validateToken, getAccountById);
router.put("/users/:id", validateToken, updateAccount);
router.delete("/users/:id", validateToken, validateAdmin, deleteAccount);

export default router;