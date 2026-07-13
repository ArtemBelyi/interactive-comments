import mongoose, { Schema, Document, Model } from "mongoose";
import { HashService } from "../services/hash";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    image: { png: string; webp: string };
}

// User without password for responses
export type UserPublic = Omit<User, 'password'>;

type UserModel = Model<User>;

const userSchema: Schema = new Schema<User, UserModel>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
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

userSchema.pre('save', async function(this: User) {
    if (this.isModified('password')) {
        this.password = await HashService.hash(this.password);
    }
});

export default mongoose.model<User>("User", userSchema);