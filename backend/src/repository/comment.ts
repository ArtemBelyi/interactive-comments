import CommentModel, { IComment } from "../models/comment";
import mongoose, { PopulateOptions } from "mongoose";

class CommentRepository {
    async findAll(): Promise<IComment[]> {
        const options: PopulateOptions = {
            path: "user",
            select: "username"
        }

        return CommentModel.find().populate(options);
    }

    async create(data: IComment): Promise<IComment> {
        const comment = {
            content: data.content,
            user: new mongoose.Types.ObjectId(data.user),
            score: data.score
        };

        return CommentModel.create(comment);
    }

    async findByUser(userId: string): Promise<IComment[]> {
        const options: PopulateOptions = {
            path: "user",
            select: "username"
        }

        return CommentModel.find({ user: userId }).populate(options);
    }

    async findById(id: string): Promise<IComment | null> {
        return CommentModel.findById(id);
    }

    async update(id: string, data: Partial<IComment>): Promise<IComment | null> {
        return CommentModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<IComment | null> {
        return CommentModel.findByIdAndDelete(id);
    }

    async findByScore(minScore: number): Promise<IComment[]> {
        return CommentModel.find({ score: { $gte: minScore } });
    }
}

export default new CommentRepository();