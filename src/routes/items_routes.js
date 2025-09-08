import { Router } from "express";
import {
  createItem,
  getItems,
  updateItem,
  deleteItem
} from "../controllers/items_controller.js";
import { protect } from "../middleware/auth_middleware.js";

const router = Router();

router.route("/")
  .get(getItems)
  .post(protect, createItem);       // assume only logged-in user can create

router.route("/:id")
  .patch(protect, updateItem)
  .delete(protect, deleteItem);

export default router;
