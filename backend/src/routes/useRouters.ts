import { Router } from "express";
import itemRouter from "./itemRoutes";
import userRouter from "./userRoutes";
import userCartRouter from "./userCartRoutes";
import discountRouter from "./discountRoutes";

const router = Router();

router.use(itemRouter);
router.use(userRouter);
router.use(userCartRouter);
router.use(discountRouter);

export default router;
