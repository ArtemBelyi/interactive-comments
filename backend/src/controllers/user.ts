import { Request, Response } from "express";
import UserService from "../services/user"
import { IUser } from "../models/user";
import { ERROR_MESSAGES } from "../constants/messages";

class UserController {
    async getAllUsers(_req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: ERROR_MESSAGES.SERVER });
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = req.body as IUser;
            const currentUser = await UserService.createUser(user);
            res.status(200).json(currentUser);
        } catch (error) {
            res.status(500).json({ error: ERROR_MESSAGES.SERVER });
        }
    }
}

export default new UserController();