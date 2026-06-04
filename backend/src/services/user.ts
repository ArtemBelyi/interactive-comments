import UserRepository from "../repository/user"
import { IUser } from "../models/user"
import { UserResponseDTO } from "../dtos/user";

class UserService {
    async getAllUsers(): Promise<UserResponseDTO[]> {
        const users = await UserRepository.getAllUsers();
        return users.map(user => new UserResponseDTO(user));
    }

    async createUser(user: IUser): Promise<UserResponseDTO> {
        const createdUser = await UserRepository.createUser(user);
        return new UserResponseDTO(createdUser);
    }
}

export default new UserService();