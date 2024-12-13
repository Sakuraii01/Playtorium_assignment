import { Router } from "express";

import {
  getDiscountController,
  getDiscountCategoryController,
} from "../controllers/discountController";
import { validateUserIdHeader } from "../middlewares/middleware";
const router = Router();

router.get("/discount", validateUserIdHeader, getDiscountController);
router.get(
  "/discount/category",
  validateUserIdHeader,
  getDiscountCategoryController
);

export default router;
