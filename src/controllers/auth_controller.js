import jwt from "jsonwebtoken";
import User from "../models/user_model.js";

const createToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if this email should be admin
    const adminEmails = ["admin@admin.com", "admin@ecommerce.com"];
    const role = adminEmails.includes(email) ? "admin" : "user";
    
    const user = await User.create({ email, password, role });
    const token = createToken(user._id, user.role);
    
    res.status(201).json({ 
      token, 
      user: { 
        email: user.email, 
        role: user.role 
      } 
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    const token = createToken(user._id, user.role);
    
    res.json({ 
      token, 
      user: { 
        email: user.email, 
        role: user.role 
      } 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
