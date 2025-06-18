import express from "express";
import {
  createAddressController,
  getAllAddressesController,
  getAddressByIdController,
  updateAddressController,
  deleteAddressController,
  getAddressesByAccountIdController,
} from "../controller/addressController.js";
import { validateToken, validateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", validateToken, createAddressController);
router.get("/", validateToken, validateAdmin, getAllAddressesController);
router.get("/:id", validateToken, getAddressByIdController);
router.put("/:id", validateToken, updateAddressController);
router.delete("/:id", validateToken, deleteAddressController);
router.get("/account/:account_id", validateToken, getAddressesByAccountIdController);

export default router;