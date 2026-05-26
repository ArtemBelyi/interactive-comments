import { Request, Response } from "express";
import UserService from "../services/user"
import { IUser } from "../models/user";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/messages";

class UserController {
    async getAllUsers(_req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getAllUsers();
            res.ok(users, SUCCESS_MESSAGES.REQUEST_SUCCESS);
        } catch {
            res.error(ERROR_MESSAGES.SERVER);
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = req.body as IUser;
            const currentUser = await UserService.createUser(user);
            res.created(currentUser, SUCCESS_MESSAGES.USER_CREATED)
        } catch {
            res.error(ERROR_MESSAGES.SERVER);
        }
    }
}

export default new UserController();