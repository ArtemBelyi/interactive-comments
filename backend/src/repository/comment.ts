import CommentModel, { IComment } from "../models/comment";
import mongoose, { PopulateOptions } from "mongoose";

class CommentRepository {
    async getComments(): Promise<IComment[]> {
        
        const options: PopulateOptions = {
            path: "user",
            select: "username"
        }

        return CommentModel.find().populate(options);
    }

    async createComment(data: IComment): Promise<IComment> {

        const comment = {
            content: data.content,
            user: new mongoose.Types.ObjectId(data.user),
            score: data.score
        };

        return CommentModel.create(comment);
    }

    async getCommentsByUser(userId: string): Promise<IComment[]> {
        return CommentModel.find({ user: userId });
    }
}

export default new CommentRepository();