import CommentRepository from "../repository/comment"
import { IComment } from "../models/comment"

class CommentService {
     async getAllComments(): Promise<IComment[]> {
        const comments = await CommentRepository.getComments()
        return comments;
    }

     async addComment(comment: IComment): Promise<IComment> {
        return CommentRepository.createComment(comment);
    }
}

export default new CommentService();