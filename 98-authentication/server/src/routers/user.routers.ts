import { Router } from "express";
import { addUser, login } from "../controllers/user.controllers";

const router = Router();

router.post("/", addUser);
router.post("/login", login);

export default router;
