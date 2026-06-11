import UserModel, { User, UserWithPassword, UserPublic } from "../models/user"

class UserRepository {
    async getAll(): Promise<User[]> {
        return UserModel.find();
    }

    async create(user: User): Promise<User> {
        return UserModel.create(user);
    }

    async findByUsername(username: string): Promise<User | null> {
        return UserModel.findOne({ username });
    }

    async findByCredentials(username: string): Promise<UserWithPassword | null> {
        return UserModel.findOne({ username }).select('+password');
    }

    async findById(id: string): Promise<User | null> {
        return UserModel.findById(id);
    }

    async update(id: string, data: Partial<User>): Promise<User | null> {
        return UserModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<User | null> {
        return UserModel.findByIdAndDelete(id);
    }
}

export default new UserRepository(); 