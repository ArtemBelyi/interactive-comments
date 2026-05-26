import { Request, Response, NextFunction } from "express";
import { Result, validationResult } from 'express-validator';
import { ERROR_MESSAGES } from "../constants/messages";
import { ErrorWithErrors } from "../types/express";

export const validateResult = (req: Request, res: Response, next: NextFunction): void => {
	const result: Result = validationResult(req);
	const formatResults: Result<string> = result.formatWith(error => error.msg as string);

	if (!formatResults.isEmpty()) {
		const error = new Error(ERROR_MESSAGES.VALIDATION_FAILED) as ErrorWithErrors;
		error.errors = result.array();
		res.error(error, 400);
		return;
	}

	next();
}