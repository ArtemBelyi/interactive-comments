import { Request, Response } from "express";
import CommentService from "../services/comment";
import { IComment } from "../models/comment";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/messages";

class CommentController {

    async getAllComments(_req: Request, res: Response): Promise<void> {
        try {
            const comments = await CommentService.getAllComments();
            res.ok(comments, SUCCESS_MESSAGES.REQUEST_SUCCESS);
        } catch {
            res.error(ERROR_MESSAGES.SERVER);
        }
    }

    async addComment(req: Request, res: Response): Promise<void> {
        try {
            const comment = req.body as IComment;
            const newComment = await CommentService.addComment(comment);
            res.created(newComment, SUCCESS_MESSAGES.COMMENT_CREATED);

        } catch {
            res.error(ERROR_MESSAGES.SERVER);
        }

    }

}

export default new CommentController();