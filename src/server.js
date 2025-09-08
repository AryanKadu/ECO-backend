// src/server.js
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth_routes.js";
import itemRoutes from "./routes/items_routes.js";
import cartRoutes from "./routes/cart_routes.js";
import adminAuthRoutes from "./routes/admin_auth_routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"],
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/admin", adminAuthRoutes);


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT, () => console.log(`Server up @${PORT}`)))
  .catch(err => console.log(err));
