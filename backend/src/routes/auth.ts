import { Router } from "express";
import UserController from "../controllers/user";
import { check } from 'express-validator';
import { validateResult } from "../middlewares/validationHandler";
import { ERROR_MESSAGES } from "../constants/messages";

const router = Router();

// Validation schemas
const authValidation = [
  check('username')
    .notEmpty().withMessage(ERROR_MESSAGES.REQUIRED.USERNAME)
    .isLength({ min: 4 }).withMessage(ERROR_MESSAGES.INVALID.USERNAME),
  validateResult
];

router.post("/register", authValidation, UserController.createUser);

router.post("/login", authValidation, UserController.createUser);

export default router;