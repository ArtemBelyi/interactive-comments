import { Request, Response } from "express";
import UserService from "../services/user"
import { SUCCESS_MESSAGES } from "../constants/messages";

class UserController {
    async getAll(_req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getAll();
            res.ok(users, SUCCESS_MESSAGES.REQUEST_SUCCESS);
        } catch (error) {
            res.error(error as string);
        }
    }
}

export default new UserController();