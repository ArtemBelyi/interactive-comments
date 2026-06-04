import { IUser } from "../models/user";

export class UserResponseDTO {
    id: string;
    username: string;
    image: { png: string; webp: string };

    constructor(user: IUser) {
        this.id = user._id.toString();
        this.username = user.username;
        this.image = user.image;
    }
}