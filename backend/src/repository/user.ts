import UserModel, { IUser } from "../models/user"

class UserRepository {
    async getAllUsers(): Promise<IUser[]> {
        return UserModel.find();
    }

    async createUser(user: IUser): Promise<IUser> {
        return UserModel.create(user);
    }

    async findUser({ username }: IUser): Promise<IUser | null> {
        const qwery = UserModel.where(username);
        return qwery.findOne();
    }
}

export default new UserRepository();