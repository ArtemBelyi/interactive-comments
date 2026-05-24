import { Router } from "express";
import { validateUser } from "../middlewares/user";
import UserController from "../controllers/user";

const router = Router();

router.get("/users",  UserController.getAllUsers);

router.post("/users", [validateUser], UserController.createUser);

export default router;