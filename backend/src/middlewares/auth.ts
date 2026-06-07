import { Request, Response, NextFunction } from 'express';
import { TokenService } from '../services/token';
import { ERROR_MESSAGES } from '../constants/messages';

export default (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies?.accessToken;

    if (!token) {
        res.error(ERROR_MESSAGES.AUTH.TOKEN_VERIFICATION_FAILED, 401);
        return;
    }

    try {
        const payload = TokenService.verify(token);
        res.locals.user = payload
        next();
    } catch {
        res.error(ERROR_MESSAGES.AUTH.TOKEN_VERIFICATION_FAILED, 401);
    }
 }

