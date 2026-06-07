import { Router } from "express";
import CommentController from "../controllers/comment";
import { check } from 'express-validator';
import { validateResult } from "../middlewares/validationHandler";
import { ERROR_MESSAGES } from "../constants/messages";

const router = Router();

// Validation schemas
const createCommentValidation = [
  check("content")
    .notEmpty().withMessage(ERROR_MESSAGES.REQUIRED.CONTENT)
    .isLength({ min: 4 }).withMessage(ERROR_MESSAGES.INVALID.CONTENT),
  validateResult
];

// Routes
router.get("/comments", CommentController.findAll);
router.post("/comments", createCommentValidation, CommentController.create);

export default router;