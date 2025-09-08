import { Router } from "express";
import { protect } from "../middleware/auth_middleware.js";
import { getMyCart, addToCart, removeFromCart } from "../controllers/cart_controller.js";

const router = Router();
router.use(protect);
router.get("/", getMyCart);
router.post("/add", addToCart);
router.post("/remove", removeFromCart);

export default router;
