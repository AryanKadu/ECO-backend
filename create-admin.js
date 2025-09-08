import mongoose from "mongoose";
import Admin from "./src/models/admin_model.js";
import dotenv from "dotenv";

dotenv.config();

const createDefaultAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: "admin@admin.com" });
    
    if (!existingAdmin) {
      await Admin.create({
        email: "admin@admin.com",
        password: "admin123"
      });
      console.log("✅ Default admin created: admin@admin.com / admin123");
    } else {
      console.log("⚠️  Admin already exists");
    }
    
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error);
    process.exit(1);
  }
};

createDefaultAdmin();
