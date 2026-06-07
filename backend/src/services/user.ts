import UserRepository from "../repository/user"
import { IUser } from "../models/user"
import { UserResponseDTO } from "../dtos/user";

class UserService {
    async getAll(): Promise<UserResponseDTO[]> {
        const users = await UserRepository.getAll();
        return users.map(user => new UserResponseDTO(user));
    }

    async register(user: IUser): Promise<UserResponseDTO> {
        const createdUser = await UserRepository.create(user);
        return new UserResponseDTO(createdUser);
    }

    async findByUsername(username: string): Promise<UserResponseDTO | null> {
        const user = await UserRepository.findByUsername(username);
        return user ? new UserResponseDTO(user) : null;
    }
}

export default new UserService();