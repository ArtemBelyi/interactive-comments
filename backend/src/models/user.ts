import mongoose, { Schema, Document, Model } from "mongoose";

export class User extends Document {
    username: string;
    password: string;
    image: { png: string; webp: string };

    constructor(user: { username: string; password: string; image?: { png: string; webp: string } }) {
        super();
        this.username = user.username;
        this.password = user.password;
        this.image = user?.image ?? { png: "",  webp: "" };
    }
}

// User without password for responses
export type UserPublic = Omit<User, 'password'>;

// User with password for authentication only
export type UserWithPassword = User & { password: string };

type UserModel = Model<User>;

const userSchema: Schema = new Schema<User, UserModel>({
    username: {
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true, 
        unique: true, 
        select: false 
    },
    image: { 
        png: String, 
        webp: String 
    },
}, { timestamps: true })

export default mongoose.model<User>("User", userSchema);