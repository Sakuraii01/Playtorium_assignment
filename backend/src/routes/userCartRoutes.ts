import { Router } from "express";
import {
  getUserCart,
  addItemToCart,
  updateItemInCart,
  deletedtemFromCart,
} from "../controllers/userCartController";
import { validateUserIdHeader } from "../middlewares/middleware";
const router = Router();

router.get("/cart", validateUserIdHeader, getUserCart);
router.post("/cart", validateUserIdHeader, addItemToCart);
router.put("/cart", validateUserIdHeader, updateItemInCart);
router.delete("/cart", validateUserIdHeader, deletedtemFromCart);

export default router;
