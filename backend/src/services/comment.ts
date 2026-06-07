import CommentRepository from "../repository/comment"
import { IComment } from "../models/comment"

class CommentService {
    async findAll(): Promise<IComment[]> {
        return CommentRepository.findAll();
    }

    async create(commentData: IComment): Promise<IComment> {
        return CommentRepository.create(commentData);
    }

    async findByUser(userId: string): Promise<IComment[]> {
        return CommentRepository.findByUser(userId);
    }

    async findById(id: string): Promise<IComment | null> {
        return CommentRepository.findById(id);
    }

    async update(id: string, data: Partial<IComment>): Promise<IComment | null> {
        return CommentRepository.update(id, data);
    }

    async delete(id: string): Promise<IComment | null> {
        return CommentRepository.delete(id);
    }
}

export default new CommentService();