import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    username: string;
    image: { png: string; webp: string };
}

const userSchema: Schema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    image: { png: String, webp: String },
}, { timestamps: true })

export default mongoose.model<IUser>("User", userSchema);