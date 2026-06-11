import UserRepository from "../repository/user"
import { User, UserWithPassword, UserPublic } from "../models/user"
import { UserRespDTO } from "../dtos/user";
import { HashService } from "./hash";
import { ERROR_MESSAGES } from "../constants/messages";

class UserService {
    async getAll(): Promise<UserRespDTO[]> {
        const users = await UserRepository.getAll();
        return users.map(user => new UserRespDTO(user));
    }

    async register(user: User): Promise<UserRespDTO> {
        const { username, password } = user;

        const isUserExists = await this.findByUsername(username);

        if (!!isUserExists) {
            throw new Error(ERROR_MESSAGES.USER_ALREADY_EXISTS);
        }

        const hashedPassword = await HashService.hash(password);
        const newUserData = new User({ username, password: hashedPassword });

        const createdUser = await UserRepository.create(newUserData);
        return new UserRespDTO(createdUser);
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = await UserRepository.findByUsername(username);
        return user ? user : null;
    }

    async findByCredentials(username: string): Promise<UserWithPassword | null> {
        return await UserRepository.findByCredentials(username);
    }
}

export default new UserService();