import { Router } from "express";
import { getUserController } from "../controllers/userController";

const router = Router();

router.post("/login", getUserController);

export default router;
