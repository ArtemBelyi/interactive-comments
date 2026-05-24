import UserRepository from "../repository/user"
import { IUser } from "../models/user"

class UserService {
    async getAllUsers(): Promise<IUser[]> {
        return UserRepository.getAllUsers();
    }

    async createUser(user: IUser): Promise<IUser> {
        return UserRepository.createUser(user);
    }
}

export default new UserService();