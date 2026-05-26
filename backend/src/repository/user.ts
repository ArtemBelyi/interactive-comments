import UserModel, { IUser } from "../models/user"

class UserRepository {
    async getAllUsers(): Promise<IUser[]> {
        return UserModel.find();
    }

    async createUser(user: IUser): Promise<IUser> {
        return UserModel.create(user);
    }
}

export default new UserRepository();