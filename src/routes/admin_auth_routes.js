import { Router } from "express";
import User from "../models/user_model.js";
import { protect } from "../middleware/auth_middleware.js";
import { adminOnly } from "../middleware/admin_middleware.js";

const router = Router();

// Get all users (admin only)
router.get("/users", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
