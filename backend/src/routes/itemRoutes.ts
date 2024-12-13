import { Router } from "express";

import { getItemsController } from "../controllers/itemController";

const router = Router();

router.get("/item", getItemsController);

export default router;
