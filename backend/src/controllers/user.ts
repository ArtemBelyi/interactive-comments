import { CookieOptions, Request, Response } from "express";
import UserService from "../services/user"
import { TokenService } from "../services/token";
import { IUser } from "../models/user";
import { SUCCESS_MESSAGES } from "../constants/messages";

class UserController {
    async getAllUsers(_req: Request, res: Response): Promise<void> {
        try {
            const users = await UserService.getAllUsers();
            res.ok(users, SUCCESS_MESSAGES.REQUEST_SUCCESS);
        } catch (error) {
            res.error(error as string);
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const user = req.body as IUser;
            const newUser = await UserService.createUser(user);
            const token = TokenService.generateToken(newUser.id, newUser.username);
            const options: CookieOptions = { httpOnly: true, maxAge: 30 * 60 * 1000 };
            res.cookie("accessToken", token, options);
            res.created(newUser, SUCCESS_MESSAGES.USER_CREATED);
        } catch (error) {
            res.error(error as string);
        }
    }
}

export default new UserController();