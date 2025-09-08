import jwt from "jsonwebtoken";
import Admin from "../models/admin_model.js";

const createToken = (id) =>
  jwt.sign({ id, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const adminSignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Only allow specific admin email (for security)
    const allowedAdminEmails = ["admin@ecommerce.com", "admin@admin.com"];
    
    if (!allowedAdminEmails.includes(email)) {
      return res.status(403).json({ message: "Unauthorized admin email" });
    }

    const admin = await Admin.create({ email, password });
    const token = createToken(admin._id);
    res.status(201).json({ token, admin: { email: admin.email, role: admin.role } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid admin credentials" });
    }
    
    const token = createToken(admin._id);
    res.json({ 
      token, 
      admin: { 
        email: admin.email, 
        role: admin.role 
      } 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
