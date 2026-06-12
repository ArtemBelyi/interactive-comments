import UserRepository from "../repository/user"
import { User, UserPublic } from "../models/user"
import { UserRespDTO } from "../dtos/user";
import { ERROR_MESSAGES } from "../constants/messages";

class UserService {
    async getAll(): Promise<UserRespDTO[]> {
        const users = await UserRepository.getAll();
        return users.map(user => new UserRespDTO(user));
    }

    async register(user: User): Promise<UserRespDTO> {
        const { username } = user;

        const isUserExists = await this.findByUsername(username);

        if (!!isUserExists) {
            throw new Error(ERROR_MESSAGES.USER_ALREADY_EXISTS);
        }

        const createdUser = await UserRepository.create(user);
        return new UserRespDTO(createdUser);
    }

    async findByUsername(username: string): Promise<UserPublic | null> {
        return await UserRepository.findByUsername(username);
    }

    async findByCredentials(username: string): Promise<User | null> {
        return await UserRepository.findByCredentials(username);
    }
}

export default new UserService();