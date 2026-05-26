import { Router } from "express";
import UserController from "../controllers/user";
import { body, check } from 'express-validator';
import { validateResult } from "../middlewares/validationHandler";
import { ERROR_MESSAGES } from "../constants/messages";

const router = Router();

// Validation schemas
const createUserValidation = [
  check('username')
    .notEmpty().withMessage(ERROR_MESSAGES.REQUIRED.USERNAME)
    .isLength({ min: 4 }).withMessage(ERROR_MESSAGES.INVALID.USERNAME),
  validateResult
];

// Routes
router.get("/users", UserController.getAllUsers);

router.post("/users", createUserValidation, UserController.createUser);

export default router;