import UserModel, { IUser } from "../models/user"

class UserRepository {
    async getAll(): Promise<IUser[]> {
        return UserModel.find();
    }

    async create(user: IUser): Promise<IUser> {
        return UserModel.create(user);
    }

    async findByUsername(username: string): Promise<IUser | null> {
        const query = UserModel.where(username);
        return query.findOne();
    }

    async findById(id: string): Promise<IUser | null> {
        return UserModel.findById(id);
    }

    async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
        return UserModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<IUser | null> {
        return UserModel.findByIdAndDelete(id);
    }
}

export default new UserRepository(); 