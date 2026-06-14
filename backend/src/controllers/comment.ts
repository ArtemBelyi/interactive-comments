import { Request, Response } from "express";
import CommentService from "../services/comment";
import { IPayloadToken } from "../services/token";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/messages";
import { IComment } from "../models/comment";

class CommentController {
    async findAll(_req: Request, res: Response): Promise<void> {
        try {
            const comments = await CommentService.findAll();
            res.ok(comments, SUCCESS_MESSAGES.REQUEST_SUCCESS);
        } catch (error) {
            res.error(ERROR_MESSAGES.SERVER);
        }
    }

    async findByUser(_req: Request, res: Response): Promise<void> {
        const payload = res.locals.user as IPayloadToken;
        
        try {
            const comments = await CommentService.findByUser(payload.id);
            res.ok(comments, SUCCESS_MESSAGES.REQUEST_SUCCESS);
        } catch (error) {
            res.error(ERROR_MESSAGES.SERVER);
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        const user = res.locals.user as IPayloadToken;
        req.body.user = user.id;

        try {
            const newComment = await CommentService.create(req.body);
            res.created(newComment, SUCCESS_MESSAGES.COMMENT_CREATED);
        } catch (error) {
            res.error(ERROR_MESSAGES.SERVER);
        }
    }
}

export default new CommentController();