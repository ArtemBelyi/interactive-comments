import { User, UserWithPassword } from "../models/user";

export class UserRespDTO {
    id: string;
    username: string;
    image: { png: string; webp: string };

    constructor(user: User | UserWithPassword) {
        this.id = user._id.toString();
        this.username = user.username;
        this.image = user.image;
    }
}
