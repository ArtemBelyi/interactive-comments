import UserModel, { User, UserPublic } from "../models/user"

class UserRepository {
    async getAll(): Promise<UserPublic[]> {
        return UserModel.find();
    }

    async create(user: User): Promise<UserPublic> {
        return UserModel.create(user);
    }

    async findByUsername(username: string): Promise<UserPublic | null> {
        return UserModel.findOne({ username });
    }

    async findByCredentials(username: string): Promise<User | null> {
        return UserModel.findOne({ username }).select('+password');
    }

    async findById(id: string): Promise<UserPublic | null> {
        return UserModel.findById(id);
    }

    async update(id: string, data: Partial<User>): Promise<UserPublic | null> {
        return UserModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<UserPublic | null> {
        return UserModel.findByIdAndDelete(id);
    }
}

export default new UserRepository(); 