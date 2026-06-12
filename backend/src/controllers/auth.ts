import { CookieOptions, Request, Response } from "express";
import UserService from "../services/user";
import { TokenService } from "../services/token";
import { User } from "../models/user";
import { SUCCESS_MESSAGES } from "../constants/messages";
import { ERROR_MESSAGES } from "../constants/messages";
import { HashService } from "../services/hash";
import { UserRespDTO } from "../dtos/user";

class AuthController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const user = req.body as User;
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
            const loginData = req.body as User;

            if (!loginData.username || !loginData.password) {
                res.error(ERROR_MESSAGES.INVALID_CREDENTIALS, 400);
                return;
            }

            const user = await UserService.findByCredentials(loginData.username);

            if (!user) {
                res.error(ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
                return;
            }

            const isPasswordValid = await HashService.compare(
                loginData.password,
                user.password,
            );

            if (!isPasswordValid) {
                res.error(ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
                return;
            }

            const token = TokenService.generate(user._id.toString(), user.username);
            const options: CookieOptions = { httpOnly: true, maxAge: 30 * 60 * 1000 };
            res.cookie("accessToken", token, options);
            res.ok(new UserRespDTO(user), SUCCESS_MESSAGES.LOGIN);
        } catch (error) {
            res.error(error as string);
        }
    }
}

export default new AuthController();