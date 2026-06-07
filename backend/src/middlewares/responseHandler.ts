import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES } from '../constants/messages';
import { ErrorWithErrors } from '../types/express';

function isErrorWithErrors(error: Error | string): error is ErrorWithErrors {
  return typeof error === 'object' && error !== null && 'errors' in error;
}

class ResponseHandler {
  constructor() {
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
  }
  
  success<T>(res: Response, data: T, message: string | null = null, statusCode: number = 200): Response {
    return res.status(statusCode).json({
      success: true,
      data,
      message,
      timestamp: new Date().toISOString()
    });
  }
  
  error(res: Response, error: Error | string, statusCode: number = 500): Response {
    const message = typeof error === 'string' ? error : error.message || ERROR_MESSAGES.SERVER;
    const errors = isErrorWithErrors(error) ? error.errors : null;
    
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString()
    });
  }
}

export const responseHandler = (_req: Request, res: Response, next: NextFunction): void => {
  const handler = new ResponseHandler();
  
  res.ok = <T>(data: T, message?: string): Response => {
    return handler.success(res, data, message || null);
  };
  
  res.created = <T>(data: T, message?: string): Response => {
    return handler.success(res, data, message || null, 201);
  };
  
  res.error = (error: Error | string, statusCode: number = 500): Response => {
    return handler.error(res, error, statusCode);
  };
  
  next();
};