import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    image: { png: string; webp: string };
}

type UserModel = Model<IUser>;

const userSchema: Schema = new Schema<IUser, UserModel>({
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


export default mongoose.model<IUser>("User", userSchema);