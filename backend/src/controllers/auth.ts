import { CookieOptions, Request, Response } from "express";
import UserService from "../services/user"
import { TokenService } from "../services/token";
import { IUser } from "../models/user";
import { SUCCESS_MESSAGES } from "../constants/messages";

class AuthController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const user = req.body as IUser;
            const newUser = await UserService.register(user);
            const token = TokenService.generate(newUser.id, newUser.username);
            const options: CookieOptions = { httpOnly: true, maxAge: 30 * 60 * 1000 };
            res.cookie("accessToken", token, options);
            res.created(newUser, SUCCESS_MESSAGES.USER_CREATED);
        } catch (error) {
            res.error(error as string);
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            //TODO
        } catch (error) {
            //TODO
        }
    }
}

export default new AuthController();