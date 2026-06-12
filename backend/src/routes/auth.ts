import { Router } from "express";
import AuthController from "../controllers/auth"
import { check } from 'express-validator';
import { validateResult } from "../middlewares/validationHandler";
import { ERROR_MESSAGES } from "../constants/messages";

const router = Router();

const authValidation = [
  check('username')
    .notEmpty().withMessage(ERROR_MESSAGES.REQUIRED.USERNAME)
    .isLength({ min: 4 }).withMessage(ERROR_MESSAGES.INVALID.USERNAME),
  check('password')
    .notEmpty().withMessage(ERROR_MESSAGES.REQUIRED.PASSWORD),
  validateResult
];

router.post("/register", authValidation, AuthController.register);

router.post("/login", authValidation, AuthController.login);

export default router;